#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 0) uniform sampler2D fp_t_tcb_8;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform samplerCube fp_t_tcb_16;
layout (binding = 3) uniform sampler2D fp_t_tcb_34;
layout (binding = 4) uniform sampler2D fp_t_tcb_32;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise vec2 temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise vec3 temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    // 0x000008: 0x0103F0000007F012 Mov32i
    // 0x000010: 0xE003FF87CFF7FF03 Ipa
    // 0x000018: 0x5080000000470303 Mufu
    // 0x000028: 0xE043FF8D8037FF02 Ipa
    temp_0 = in_attr5.z;
    // 0x000030: 0xE043FF8DC037FF07 Ipa
    temp_1 = in_attr5.w;
    // 0x000038: 0xD830008FF0770206 Texs
    temp_2 = texture(fp_t_tcb_8, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xE043FF8D0037FF05 Ipa
    temp_5 = in_attr5.x;
    // 0x000050: 0xE043FF8D4037FF04 Ipa
    temp_6 = in_attr5.y;
    // 0x000058: 0x49A0029405870605 Ffma
    temp_7 = fma(temp_3, fp_c5.data[22].x, temp_5);
    // 0x000068: 0x49A0021405970704 Ffma
    temp_8 = fma(temp_4, fp_c5.data[22].y, temp_6);
    // 0x000070: 0xD830026FF0470500 Texs
    temp_9 = texture(fp_t_tcb_26, vec2(temp_7, temp_8)).xy;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    // 0x000078: 0xE043FF8A0037FF0D Ipa
    temp_12 = in_attr2.x;
    // 0x000088: 0xE043FF890037FF0A Ipa
    temp_13 = in_attr1.x;
    // 0x000090: 0xE043FF8A4037FF0B Ipa
    temp_14 = in_attr2.y;
    // 0x000098: 0xE043FF894037FF09 Ipa
    temp_15 = in_attr1.y;
    // 0x0000A8: 0xE043FF8A8037FF0C Ipa
    temp_16 = in_attr2.z;
    // 0x0000B0: 0xE043FF880037FF02 Ipa
    temp_17 = in_attr0.x;
    // 0x0000B8: 0xE043FF898037FF08 Ipa
    temp_18 = in_attr1.z;
    // 0x0000C8: 0xE043FF884037FF06 Ipa
    temp_19 = in_attr0.y;
    // 0x0000D0: 0xE043FF888037FF07 Ipa
    temp_20 = in_attr0.z;
    // 0x0000D8: 0x5C68100000D70D0E Fmul
    temp_21 = temp_12 * temp_12;
    // 0x0000E8: 0x5C68100000A70A0F Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000F0: 0x5C68100000270210 Fmul
    temp_23 = temp_17 * temp_17;
    // 0x0000F8: 0x59A0070000B70B0E Ffma
    temp_24 = fma(temp_14, temp_14, temp_21);
    // 0x000108: 0x59A0078000970911 Ffma
    temp_25 = fma(temp_15, temp_15, temp_22);
    // 0x000110: 0x59A0080000670610 Ffma
    temp_26 = fma(temp_19, temp_19, temp_23);
    // 0x000118: 0x59A0070000C70C0F Ffma
    temp_27 = fma(temp_16, temp_16, temp_24);
    // 0x000128: 0x59A0088000870811 Ffma
    temp_28 = fma(temp_18, temp_18, temp_25);
    // 0x000130: 0x5080000000570F0E Mufu
    temp_29 = inversesqrt(temp_27);
    // 0x000138: 0x59A0080000770710 Ffma
    temp_30 = fma(temp_20, temp_20, temp_26);
    // 0x000148: 0x5080000000571113 Mufu
    temp_31 = inversesqrt(temp_28);
    // 0x000150: 0x5C68100000E70B0B Fmul
    temp_32 = temp_14 * temp_29;
    // 0x000158: 0x5080000000571010 Mufu
    temp_33 = inversesqrt(temp_30);
    // 0x000168: 0x5C68100000E70C0C Fmul
    temp_34 = temp_16 * temp_29;
    // 0x000170: 0x5C68100000E70D0E Fmul
    temp_35 = temp_12 * temp_29;
    // 0x000178: 0x5C68100001370A0D Fmul
    temp_36 = temp_13 * temp_31;
    // 0x000188: 0x5C6810000137080A Fmul
    temp_37 = temp_18 * temp_31;
    // 0x000190: 0x5C68100001370909 Fmul
    temp_38 = temp_15 * temp_31;
    // 0x000198: 0x5C68100001070202 Fmul
    temp_39 = temp_17 * temp_33;
    // 0x0001A8: 0x5C68100001070606 Fmul
    temp_40 = temp_19 * temp_33;
    // 0x0001B0: 0x5C68100001070707 Fmul
    temp_41 = temp_20 * temp_33;
    // 0x0001B8: 0x5C6810000017010F Fmul
    temp_42 = temp_11 * temp_11;
    // 0x0001C8: 0x5C68100000E7010E Fmul
    temp_43 = temp_11 * temp_35;
    // 0x0001D0: 0x5C68100000B7010B Fmul
    temp_44 = temp_11 * temp_32;
    // 0x0001D8: 0x5C68100000C70101 Fmul
    temp_45 = temp_11 * temp_34;
    // 0x0001E8: 0x59A007800007000F Ffma
    temp_46 = fma(temp_10, temp_10, temp_42);
    // 0x0001F0: 0x59A0070000D7000D Ffma
    temp_47 = fma(temp_10, temp_36, temp_43);
    // 0x0001F8: 0x59A0058000970009 Ffma
    temp_48 = fma(temp_10, temp_38, temp_44);
    // 0x000208: 0x59A0008000A70001 Ffma
    temp_49 = fma(temp_10, temp_37, temp_45);
    // 0x000210: 0x385D103F80070F08 Fadd
    temp_50 = 0.0 - temp_46;
    temp_51 = temp_50 + 1.0;
    temp_52 = clamp(temp_51, 0.0, 1.0);
    // 0x000218: 0xE043FF8E4037FF0F Ipa
    temp_53 = in_attr6.y;
    // 0x000228: 0x010404000007F014 Mov32i
    // 0x000230: 0x5080000000870808 Mufu
    temp_54 = sqrt(temp_52);
    // 0x000238: 0x59A0068000270802 Ffma
    temp_55 = fma(temp_54, temp_39, temp_47);
    // 0x000248: 0x59A0048000670806 Ffma
    temp_56 = fma(temp_54, temp_40, temp_48);
    // 0x000250: 0x59A0008000770807 Ffma
    temp_57 = fma(temp_54, temp_41, temp_49);
    // 0x000258: 0x5C68100000270200 Fmul
    temp_58 = temp_55 * temp_55;
    // 0x000268: 0x59A0000000670600 Ffma
    temp_59 = fma(temp_56, temp_56, temp_58);
    // 0x000270: 0x59A000000077070A Ffma
    temp_60 = fma(temp_57, temp_57, temp_59);
    // 0x000278: 0x5080000000570A00 Mufu
    temp_61 = inversesqrt(temp_60);
    // 0x000288: 0x5C68100000070608 Fmul
    temp_62 = temp_56 * temp_61;
    // 0x000290: 0xE043FF8E0037FF06 Ipa
    temp_63 = in_attr6.x;
    // 0x000298: 0x5C68100000070209 Fmul
    temp_64 = temp_55 * temp_61;
    // 0x0002A8: 0x5C68100000070707 Fmul
    temp_65 = temp_57 * temp_61;
    // 0x0002B0: 0x5C62578000870900 Fmnmx
    temp_66 = abs(temp_64);
    temp_67 = abs(temp_62);
    temp_68 = max(temp_66, temp_67);
    // 0x0002B8: 0x5C6057800007070E Fmnmx
    temp_69 = abs(temp_65);
    temp_70 = max(temp_69, temp_68);
    // 0x0002C8: 0x5080000000470E0E Mufu
    temp_71 = 1.0 / temp_70;
    // 0x0002D0: 0x5C68100000E70900 Fmul
    temp_72 = temp_64 * temp_71;
    // 0x0002D8: 0x5C68100000E70801 Fmul
    temp_73 = temp_62 * temp_71;
    // 0x0002E8: 0x5C69100000E70702 Fmul
    temp_74 = 0.0 - temp_71;
    temp_75 = temp_65 * temp_74;
    // 0x0002F0: 0xC0BA0163EFF70000 Tex
    temp_76 = textureLod(fp_t_tcb_16, vec3(temp_72, temp_73, temp_75), 0.0).xyz;
    temp_77 = temp_76.x;
    temp_78 = temp_76.y;
    temp_79 = temp_76.z;
    // 0x0002F8: 0xD822034FF0F70606 Texs
    temp_80 = texture(fp_t_tcb_34, vec2(temp_63, temp_53)).x;
    // 0x000308: 0xD822032FF0470504 Texs
    temp_81 = texture(fp_t_tcb_32, vec2(temp_7, temp_8)).x;
    // 0x000310: 0xE043FF8B0037FF0B Ipa
    temp_82 = in_attr3.x;
    // 0x000318: 0xE043FF8B4037FF0A Ipa
    temp_83 = in_attr3.y;
    // 0x000328: 0xE043FF8B8037FF0C Ipa
    temp_84 = in_attr3.z;
    // 0x000330: 0x5C68100000B70B0D Fmul
    temp_85 = temp_82 * temp_82;
    // 0x000338: 0x59A0068000A70A0D Ffma
    temp_86 = fma(temp_83, temp_83, temp_85);
    // 0x000348: 0x59A0068000C70C0D Ffma
    temp_87 = fma(temp_84, temp_84, temp_86);
    // 0x000350: 0x5080000000570D0D Mufu
    temp_88 = inversesqrt(temp_87);
    // 0x000358: 0x5C69100000D70B0B Fmul
    temp_89 = 0.0 - temp_88;
    temp_90 = temp_82 * temp_89;
    // 0x000368: 0x5C69100000D70A0A Fmul
    temp_91 = 0.0 - temp_88;
    temp_92 = temp_83 * temp_91;
    // 0x000370: 0x4C58301805C70B0E Fadd
    temp_93 = 0.0 - fp_c6.data[23].x;
    temp_94 = temp_90 + temp_93;
    // 0x000378: 0x5C69100000D70C05 Fmul
    temp_95 = 0.0 - temp_88;
    temp_96 = temp_84 * temp_95;
    // 0x000388: 0x4C58301805D70A0C Fadd
    temp_97 = 0.0 - fp_c6.data[23].y;
    temp_98 = temp_92 + temp_97;
    // 0x000390: 0x5C68100000E70E11 Fmul
    temp_99 = temp_94 * temp_94;
    // 0x000398: 0x4C58301805E7050F Fadd
    temp_100 = 0.0 - fp_c6.data[23].z;
    temp_101 = temp_96 + temp_100;
    // 0x0003A8: 0x59A0088000C70C11 Ffma
    temp_102 = fma(temp_98, temp_98, temp_99);
    // 0x0003B0: 0x59A0088000F70F11 Ffma
    temp_103 = fma(temp_101, temp_101, temp_102);
    // 0x0003B8: 0x5080000000571111 Mufu
    temp_104 = inversesqrt(temp_103);
    // 0x0003C8: 0x5C68100001170E0E Fmul
    temp_105 = temp_94 * temp_104;
    // 0x0003D0: 0x5C68100001170C0C Fmul
    temp_106 = temp_98 * temp_104;
    // 0x0003D8: 0x5C68100001170F0F Fmul
    temp_107 = temp_101 * temp_104;
    // 0x0003E8: 0x4C69101805C70911 Fmul
    temp_108 = 0.0 - fp_c6.data[23].x;
    temp_109 = temp_64 * temp_108;
    // 0x0003F0: 0x5C68100000E70B0D Fmul
    temp_110 = temp_90 * temp_105;
    // 0x0003F8: 0x5C68100000B7090B Fmul
    temp_111 = temp_64 * temp_90;
    // 0x000408: 0x4C68101805C70909 Fmul
    temp_112 = temp_64 * fp_c6.data[23].x;
    // 0x000410: 0x49A1089805D70811 Ffma
    temp_113 = 0.0 - fp_c6.data[23].y;
    temp_114 = fma(temp_62, temp_113, temp_109);
    // 0x000418: 0x59A0068000C70A0C Ffma
    temp_115 = fma(temp_92, temp_106, temp_110);
    // 0x000428: 0x59A0058000A7080A Ffma
    temp_116 = fma(temp_62, temp_92, temp_111);
    // 0x000430: 0x4C9807980907000B Mov
    // 0x000438: 0x4C98079800A7000D Mov
    // 0x000448: 0x59A4060000F7050C Ffma
    temp_117 = fma(temp_96, temp_107, temp_115);
    temp_118 = clamp(temp_117, 0.0, 1.0);
    // 0x000450: 0x59A405000057070A Ffma
    temp_119 = fma(temp_65, temp_96, temp_116);
    temp_120 = clamp(temp_119, 0.0, 1.0);
    // 0x000458: 0x01040DF760C7F005 Mov32i
    // 0x000468: 0x4C9807980097000F Mov
    // 0x000470: 0x4C59101800670D13 Fadd
    temp_121 = 0.0 - fp_c6.data[2].z;
    temp_122 = temp_121 + fp_c6.data[1].z;
    // 0x000478: 0x49A5089805E7070D Ffma
    temp_123 = 0.0 - fp_c6.data[23].z;
    temp_124 = fma(temp_65, temp_123, temp_114);
    temp_125 = clamp(temp_124, 0.0, 1.0);
    // 0x000488: 0x51A1059809070A0B Ffma
    temp_126 = 0.0 - fp_c6.data[36].x;
    temp_127 = fma(temp_120, temp_126, fp_c6.data[36].x);
    // 0x000490: 0x49A2028400070C05 Ffma
    temp_128 = fma(temp_118, fp_c1.data[0].x, -6.98316002);
    // 0x000498: 0x5080400000370B0B Mufu
    temp_129 = abs(temp_127);
    temp_130 = log2(temp_129);
    // 0x0004A8: 0x4C98079809B7000A Mov
    // 0x0004B0: 0x4C59101800570F10 Fadd
    temp_131 = 0.0 - fp_c6.data[2].y;
    temp_132 = temp_131 + fp_c6.data[1].y;
    // 0x0004B8: 0x5C68100000570C0E Fmul
    temp_133 = temp_118 * temp_128;
    // 0x0004C8: 0x4C98079800870005 Mov
    // 0x0004D0: 0x4C58101408170A0F Fadd
    temp_134 = fp_c6.data[38].w + fp_c5.data[32].y;
    // 0x0004D8: 0x4C68101809170B0C Fmul
    temp_135 = temp_130 * fp_c6.data[36].y;
    // 0x0004E8: 0x5C90008000E7000B Rro
    // 0x0004F0: 0x32A0093F0007080E Ffma
    temp_136 = fma(temp_62, 0.5, 0.5);
    // 0x0004F8: 0x5080000000270B0B Mufu
    temp_137 = exp2(temp_133);
    // 0x000508: 0x4C59101800470505 Fadd
    temp_138 = 0.0 - fp_c6.data[2].x;
    temp_139 = temp_138 + fp_c6.data[1].x;
    // 0x000510: 0x49A0049805D70808 Ffma
    temp_140 = fma(temp_62, fp_c6.data[23].y, temp_112);
    // 0x000518: 0x5C90008000C7000C Rro
    // 0x000528: 0x5084000000270C0C Mufu
    temp_141 = exp2(temp_135);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x000530: 0x51A007180097100A Ffma
    temp_143 = fma(temp_132, temp_136, fp_c6.data[2].y);
    // 0x000538: 0x51A0071800870505 Ffma
    temp_144 = fma(temp_139, temp_136, fp_c6.data[2].x);
    // 0x000548: 0x51A0071800A71309 Ffma
    temp_145 = fma(temp_122, temp_136, fp_c6.data[2].z);
    // 0x000550: 0x4C68101801470D0E Fmul
    temp_146 = temp_125 * fp_c6.data[5].x;
    // 0x000558: 0x49A4041805E70707 Ffma
    temp_147 = fma(temp_65, fp_c6.data[23].z, temp_140);
    temp_148 = clamp(temp_147, 0.0, 1.0);
    // 0x000568: 0xE043FF8C8037FF08 Ipa
    temp_149 = in_attr4.z;
    // 0x000570: 0x49A1059407B70B10 Ffma
    temp_150 = 0.0 - fp_c5.data[30].w;
    temp_151 = fma(temp_137, temp_150, temp_137);
    // 0x000578: 0x4C68101801570D0B Fmul
    temp_152 = temp_125 * fp_c6.data[5].y;
    // 0x000588: 0x4C68101801670D0D Fmul
    temp_153 = temp_125 * fp_c6.data[5].z;
    // 0x000590: 0x1E23EA2F98370E0E Fmul32i
    temp_154 = temp_146 * 0.318309873;
    // 0x000598: 0x5C68100000F70C0F Fmul
    temp_155 = temp_142 * temp_134;
    // 0x0005A8: 0x4C58101407B71010 Fadd
    temp_156 = temp_151 + fp_c5.data[30].w;
    // 0x0005B0: 0x1E23EA2F98370B11 Fmul32i
    temp_157 = temp_152 * 0.318309873;
    // 0x0005B8: 0x1E23EA2F98370D12 Fmul32i
    temp_158 = temp_153 * 0.318309873;
    // 0x0005C8: 0x4C68101808D70F0C Fmul
    temp_159 = temp_155 * fp_c6.data[35].y;
    // 0x0005D0: 0x4C68101808C70F0B Fmul
    temp_160 = temp_155 * fp_c6.data[35].x;
    // 0x0005D8: 0x4C68101808E70F0D Fmul
    temp_161 = temp_155 * fp_c6.data[35].z;
    // 0x0005E8: 0x59A1088001171011 Ffma
    temp_162 = 0.0 - temp_157;
    temp_163 = fma(temp_156, temp_162, temp_157);
    // 0x0005F0: 0x59A1070000E71013 Ffma
    temp_164 = 0.0 - temp_154;
    temp_165 = fma(temp_156, temp_164, temp_154);
    // 0x0005F8: 0x59A1090001271012 Ffma
    temp_166 = 0.0 - temp_158;
    temp_167 = fma(temp_156, temp_166, temp_158);
    // 0x000608: 0x49A1061408270C0F Ffma
    temp_168 = 0.0 - fp_c5.data[32].z;
    temp_169 = fma(temp_159, temp_168, temp_159);
    // 0x000610: 0x49A1059408270B0E Ffma
    temp_170 = 0.0 - fp_c5.data[32].z;
    temp_171 = fma(temp_160, temp_170, temp_160);
    // 0x000618: 0x49A1069408270D10 Ffma
    temp_172 = 0.0 - fp_c5.data[32].z;
    temp_173 = fma(temp_161, temp_172, temp_161);
    // 0x000628: 0x4C68101408270C0C Fmul
    temp_174 = temp_159 * fp_c5.data[32].z;
    // 0x000630: 0x5C58100001170F0F Fadd
    temp_175 = temp_169 + temp_163;
    // 0x000638: 0x33A00A4000070711 Ffma
    temp_176 = fma(temp_148, -2.0, 3.0);
    // 0x000648: 0x5C68100000770707 Fmul
    temp_177 = temp_148 * temp_148;
    // 0x000650: 0x5C58100001370E0E Fadd
    temp_178 = temp_171 + temp_165;
    // 0x000658: 0x5C58100001271010 Fadd
    temp_179 = temp_173 + temp_167;
    // 0x000668: 0x49A0000400170500 Ffma
    temp_180 = fma(temp_144, fp_c1.data[0].y, temp_77);
    // 0x000670: 0x49A0010400170902 Ffma
    temp_181 = fma(temp_145, fp_c1.data[0].y, temp_79);
    // 0x000678: 0x49A0008400170A0A Ffma
    temp_182 = fma(temp_143, fp_c1.data[0].y, temp_78);
    // 0x000688: 0x5C68100001170701 Fmul
    temp_183 = temp_177 * temp_176;
    // 0x000690: 0x5C58100000470603 Fadd
    temp_184 = temp_80 + temp_81;
    // 0x000698: 0x4C68101408270B05 Fmul
    temp_185 = temp_160 * fp_c5.data[32].z;
    // 0x0006A8: 0x5C58100000070E00 Fadd
    temp_186 = temp_178 + temp_180;
    // 0x0006B0: 0x5C58100000271002 Fadd
    temp_187 = temp_179 + temp_181;
    // 0x0006B8: 0x4C68101408270D07 Fmul
    temp_188 = temp_161 * fp_c5.data[32].z;
    // 0x0006C8: 0x5C58100000A70F0A Fadd
    temp_189 = temp_175 + temp_182;
    // 0x0006D0: 0x0103F8000007F009 Mov32i
    // 0x0006D8: 0x59A1018000170403 Ffma
    temp_190 = 0.0 - temp_183;
    temp_191 = fma(temp_81, temp_190, temp_184);
    // 0x0006E8: 0x49A0029402C70005 Ffma
    temp_192 = fma(temp_186, fp_c5.data[11].x, temp_185);
    // 0x0006F0: 0x4C58100C03870804 Fadd
    temp_193 = temp_149 + fp_c3.data[14].x;
    // 0x0006F8: 0x49A0039402E70207 Ffma
    temp_194 = fma(temp_187, fp_c5.data[11].z, temp_188);
    // 0x000708: 0x49A0061402D70A06 Ffma
    temp_195 = fma(temp_189, fp_c5.data[11].y, temp_174);
    // 0x000710: 0x4C5C101402C70900 Fadd
    temp_196 = 1.0 + fp_c5.data[11].x;
    temp_197 = clamp(temp_196, 0.0, 1.0);
    // 0x000718: 0x4C5C101402D70901 Fadd
    temp_198 = 1.0 + fp_c5.data[11].y;
    temp_199 = clamp(temp_198, 0.0, 1.0);
    // 0x000728: 0x4C5C101402E70902 Fadd
    temp_200 = 1.0 + fp_c5.data[11].z;
    temp_201 = clamp(temp_200, 0.0, 1.0);
    // 0x000730: 0x49A67F9406370303 Ffma
    temp_202 = fma(temp_191, fp_c5.data[24].w, -0.0);
    temp_203 = clamp(temp_202, 0.0, 1.0);
    // 0x000738: 0x49A37F8C03C70404 Ffma
    temp_204 = 0.0 - fp_c3.data[15].x;
    temp_205 = fma(temp_193, temp_204, -0.0);
    // 0x000748: 0x5C68100000570000 Fmul
    temp_206 = temp_197 * temp_192;
    // 0x000750: 0x5C68100000670101 Fmul
    temp_207 = temp_199 * temp_195;
    // 0x000758: 0x5C68100000770202 Fmul
    temp_208 = temp_201 * temp_194;
    // 0x000768: 0x0103F8000007F005 Mov32i
    // 0x000770: 0x5C9807800FF70006 Mov
    // 0x000778: 0x5C98078000370007 Mov
    // 0x000788: 0xE30000000007000F Exit
    out_attr0.x = temp_206;
    out_attr0.y = temp_207;
    out_attr0.z = temp_208;
    out_attr0.w = temp_203;
    out_attr1.x = temp_205;
    out_attr1.y = 1.0;
    out_attr1.z = 0.0;
    out_attr1.w = temp_203;
    return;
}
