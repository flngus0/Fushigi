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

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

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

layout (binding = 0) uniform sampler2D fp_t_tcb_8;
layout (binding = 1) uniform samplerCube fp_t_tcb_16;
layout (binding = 2) uniform sampler2D fp_t_tcb_34;
layout (binding = 3) uniform sampler2D fp_t_tcb_20;
layout (binding = 4) uniform sampler2D fp_t_tcb_32;
layout (binding = 5) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 7) in vec4 in_attr7;

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
    precise float temp_9;
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
    precise vec3 temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise vec3 temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise vec3 temp_46;
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
    precise float temp_76;
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
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    // 0x000008: 0x4C98079C02070017 Mov
    // 0x000010: 0xE003FF87CFF7FF07 Ipa
    // 0x000018: 0x5080000000470707 Mufu
    // 0x000028: 0xE043FF8C8077FF12 Ipa
    temp_0 = in_attr4.z;
    // 0x000030: 0xE043FF8CC077FF13 Ipa
    temp_1 = in_attr4.w;
    // 0x000038: 0xD830008FF1371212 Texs
    temp_2 = texture(fp_t_tcb_8, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xE043FF880077FF10 Ipa
    temp_5 = in_attr0.x;
    // 0x000050: 0xE043FF884077FF0F Ipa
    temp_6 = in_attr0.y;
    // 0x000058: 0xE043FF888077FF0E Ipa
    temp_7 = in_attr0.z;
    // 0x000068: 0xE003FF870FF7FF02 Ipa
    temp_8 = gl_FragCoord.x;
    temp_9 = support_buffer.render_scale[0];
    temp_10 = temp_8 / temp_9;
    // 0x000070: 0xE043FF8D0077FF08 Ipa
    temp_11 = in_attr5.x;
    // 0x000078: 0xE043FF8D4077FF09 Ipa
    temp_12 = in_attr5.y;
    // 0x000088: 0xE003FF874FF7FF03 Ipa
    temp_13 = gl_FragCoord.y;
    temp_14 = support_buffer.render_scale[0];
    temp_15 = temp_13 / temp_14;
    // 0x000090: 0xE043FF8F0077FF04 Ipa
    temp_16 = in_attr7.x;
    // 0x000098: 0xE043FF8F4077FF05 Ipa
    temp_17 = in_attr7.y;
    // 0x0000A8: 0x5C68100001071000 Fmul
    temp_18 = temp_5 * temp_5;
    // 0x0000B0: 0x4C68100C04A7020A Fmul
    temp_19 = temp_10 * fp_c3.data[18].z;
    // 0x0000B8: 0x59A0000000F70F00 Ffma
    temp_20 = fma(temp_6, temp_6, temp_18);
    // 0x0000C8: 0x4C68100C04B70303 Fmul
    temp_21 = temp_15 * fp_c3.data[18].w;
    // 0x0000D0: 0x59A0000000E70E00 Ffma
    temp_22 = fma(temp_7, temp_7, temp_20);
    // 0x0000D8: 0x5080000000570001 Mufu
    temp_23 = inversesqrt(temp_22);
    // 0x0000E8: 0x5C68100000171010 Fmul
    temp_24 = temp_5 * temp_23;
    // 0x0000F0: 0x5C68100000170F0F Fmul
    temp_25 = temp_6 * temp_23;
    // 0x0000F8: 0x5C68100000170E0E Fmul
    temp_26 = temp_7 * temp_23;
    // 0x000108: 0x5C62578000F71001 Fmnmx
    temp_27 = abs(temp_24);
    temp_28 = abs(temp_25);
    temp_29 = max(temp_27, temp_28);
    // 0x000110: 0x5C60578000170E06 Fmnmx
    temp_30 = abs(temp_26);
    temp_31 = max(temp_30, temp_29);
    // 0x000118: 0x508000000047060D Mufu
    temp_32 = 1.0 / temp_31;
    // 0x000128: 0xE043FF8F8077FF06 Ipa
    temp_33 = in_attr7.z;
    // 0x000130: 0x5C68100000D71000 Fmul
    temp_34 = temp_24 * temp_32;
    // 0x000138: 0x5C68100000D70F01 Fmul
    temp_35 = temp_25 * temp_32;
    // 0x000148: 0x5C69100000D70E02 Fmul
    temp_36 = 0.0 - temp_32;
    temp_37 = temp_26 * temp_36;
    // 0x000150: 0xC0BA0163EFF70000 Tex
    temp_38 = textureLod(fp_t_tcb_16, vec3(temp_34, temp_35, temp_37), 0.0).xyz;
    temp_39 = temp_38.x;
    temp_40 = temp_38.y;
    temp_41 = temp_38.z;
    // 0x000158: 0xD8220340C0970808 Texs
    temp_42 = texture(fp_t_tcb_34, vec2(temp_11, temp_12)).xyz;
    temp_43 = temp_42.x;
    temp_44 = temp_42.y;
    temp_45 = temp_42.z;
    // 0x000168: 0xD822020030370A0A Texs
    temp_46 = texture(fp_t_tcb_20, vec2(temp_19, temp_21)).xyz;
    temp_47 = temp_46.x;
    temp_48 = temp_46.y;
    temp_49 = temp_46.z;
    // 0x000170: 0xDEBA0000C1770404 TexB
    temp_50 = texture(fp_t_cb7_20, vec3(temp_16, temp_17, temp_33)).x;
    // 0x000178: 0xE043FF8C0077FF0D Ipa
    temp_51 = in_attr4.x;
    // 0x000188: 0xE043FF8C4077FF11 Ipa
    temp_52 = in_attr4.y;
    // 0x000190: 0xF0F0000034470000 Depbar
    // 0x000198: 0x49A006940587120D Ffma
    temp_53 = fma(temp_3, fp_c5.data[22].x, temp_51);
    // 0x0001A8: 0x49A0089405971316 Ffma
    temp_54 = fma(temp_4, fp_c5.data[22].y, temp_52);
    // 0x0001B0: 0xD822032FF1670D0D Texs
    temp_55 = texture(fp_t_tcb_32, vec2(temp_53, temp_54)).x;
    // 0x0001B8: 0xE043FF8A0077FF11 Ipa
    temp_56 = in_attr2.x;
    // 0x0001C8: 0xE043FF8A4077FF12 Ipa
    temp_57 = in_attr2.y;
    // 0x0001D0: 0xE043FF8A8077FF13 Ipa
    temp_58 = in_attr2.z;
    // 0x0001D8: 0x5C68100001171114 Fmul
    temp_59 = temp_56 * temp_56;
    // 0x0001E8: 0x59A00A0001271214 Ffma
    temp_60 = fma(temp_57, temp_57, temp_59);
    // 0x0001F0: 0x59A00A0001371314 Ffma
    temp_61 = fma(temp_58, temp_58, temp_60);
    // 0x0001F8: 0x5080000000571414 Mufu
    temp_62 = inversesqrt(temp_61);
    // 0x000208: 0x5C69100001471106 Fmul
    temp_63 = 0.0 - temp_62;
    temp_64 = temp_56 * temp_63;
    // 0x000210: 0x5C69100001471205 Fmul
    temp_65 = 0.0 - temp_62;
    temp_66 = temp_57 * temp_65;
    // 0x000218: 0x5C69100001471311 Fmul
    temp_67 = 0.0 - temp_62;
    temp_68 = temp_58 * temp_67;
    // 0x000228: 0x4C58301805C70612 Fadd
    temp_69 = 0.0 - fp_c6.data[23].x;
    temp_70 = temp_64 + temp_69;
    // 0x000230: 0x4C58301805D70513 Fadd
    temp_71 = 0.0 - fp_c6.data[23].y;
    temp_72 = temp_66 + temp_71;
    // 0x000238: 0x4C58301805E71115 Fadd
    temp_73 = 0.0 - fp_c6.data[23].z;
    temp_74 = temp_68 + temp_73;
    // 0x000248: 0x5C6810000107061A Fmul
    temp_75 = temp_64 * temp_24;
    // 0x000250: 0x5C68100001271216 Fmul
    temp_76 = temp_70 * temp_70;
    // 0x000258: 0x59A00D0000F70517 Ffma
    temp_77 = fma(temp_66, temp_25, temp_75);
    // 0x000268: 0x59A00B0001371316 Ffma
    temp_78 = fma(temp_72, temp_72, temp_76);
    // 0x000270: 0x59A40B8000E71117 Ffma
    temp_79 = fma(temp_68, temp_26, temp_77);
    temp_80 = clamp(temp_79, 0.0, 1.0);
    // 0x000278: 0x59A00B0001571516 Ffma
    temp_81 = fma(temp_74, temp_74, temp_78);
    // 0x000288: 0x5080000000571618 Mufu
    temp_82 = inversesqrt(temp_81);
    // 0x000290: 0x4C98079800970016 Mov
    // 0x000298: 0x5C68100001871214 Fmul
    temp_83 = temp_70 * temp_82;
    // 0x0002A8: 0x5C68100001871313 Fmul
    temp_84 = temp_72 * temp_82;
    // 0x0002B0: 0x5C68100001871518 Fmul
    temp_85 = temp_74 * temp_82;
    // 0x0002B8: 0x4C59101800571616 Fadd
    temp_86 = 0.0 - fp_c6.data[2].y;
    temp_87 = temp_86 + fp_c6.data[1].y;
    // 0x0002C8: 0x4C98079800A70015 Mov
    // 0x0002D0: 0x5C68100001470614 Fmul
    temp_88 = temp_64 * temp_83;
    // 0x0002D8: 0x4C98079809070006 Mov
    // 0x0002E8: 0x4C59101800671515 Fadd
    temp_89 = 0.0 - fp_c6.data[2].z;
    temp_90 = temp_89 + fp_c6.data[1].z;
    // 0x0002F0: 0x59A00A0001370513 Ffma
    temp_91 = fma(temp_66, temp_84, temp_88);
    // 0x0002F8: 0x51A1031809071717 Ffma
    temp_92 = 0.0 - fp_c6.data[36].x;
    temp_93 = fma(temp_80, temp_92, fp_c6.data[36].x);
    // 0x000308: 0x01040DF760C7F005 Mov32i
    // 0x000310: 0x5080400000371717 Mufu
    temp_94 = abs(temp_93);
    temp_95 = log2(temp_94);
    // 0x000318: 0x4C69101805C71006 Fmul
    temp_96 = 0.0 - fp_c6.data[23].x;
    temp_97 = temp_24 * temp_96;
    // 0x000328: 0x4C68101805C71014 Fmul
    temp_98 = temp_24 * fp_c6.data[23].x;
    // 0x000330: 0x59A4098001871113 Ffma
    temp_99 = fma(temp_68, temp_85, temp_91);
    temp_100 = clamp(temp_99, 0.0, 1.0);
    // 0x000338: 0x0103F0000007F011 Mov32i
    // 0x000348: 0x49A00A1805D70F14 Ffma
    temp_101 = fma(temp_25, fp_c6.data[23].y, temp_98);
    // 0x000350: 0x49A2028400071305 Ffma
    temp_102 = fma(temp_100, fp_c1.data[0].x, -6.98316002);
    // 0x000358: 0x32A008BF00070F10 Ffma
    temp_103 = fma(temp_25, 0.5, 0.5);
    // 0x000368: 0x49A1031805D70F11 Ffma
    temp_104 = 0.0 - fp_c6.data[23].y;
    temp_105 = fma(temp_25, temp_104, temp_97);
    // 0x000370: 0x4C98079800870006 Mov
    // 0x000378: 0x4C68101809171712 Fmul
    temp_106 = temp_95 * fp_c6.data[36].y;
    // 0x000388: 0x49A00A1805E70E18 Ffma
    temp_107 = fma(temp_26, fp_c6.data[23].z, temp_101);
    // 0x000390: 0x5C68100000571305 Fmul
    temp_108 = temp_100 * temp_102;
    // 0x000398: 0x51A00A9800A71015 Ffma
    temp_109 = fma(temp_103, temp_90, fp_c6.data[2].z);
    // 0x0003A8: 0x49A5089805E70E11 Ffma
    temp_110 = 0.0 - fp_c6.data[23].z;
    temp_111 = fma(temp_26, temp_110, temp_105);
    temp_112 = clamp(temp_111, 0.0, 1.0);
    // 0x0003B0: 0x4C59101800470606 Fadd
    temp_113 = 0.0 - fp_c6.data[2].x;
    temp_114 = temp_113 + fp_c6.data[1].x;
    // 0x0003B8: 0x5C90008001270013 Rro
    // 0x0003C8: 0x4C98079809B70012 Mov
    // 0x0003D0: 0x5084000000271313 Mufu
    temp_115 = exp2(temp_106);
    temp_116 = clamp(temp_115, 0.0, 1.0);
    // 0x0003D8: 0x5C9000800057000F Rro
    // 0x0003E8: 0xE04BFF8E4077FF05 Ipa
    temp_117 = in_attr6.y;
    temp_118 = clamp(temp_117, 0.0, 1.0);
    // 0x0003F0: 0x3859503F8007181C Fadd
    temp_119 = abs(temp_107);
    temp_120 = 0.0 - temp_119;
    temp_121 = temp_120 + 1.0;
    // 0x0003F8: 0x5080000000270F0F Mufu
    temp_122 = exp2(temp_108);
    // 0x000408: 0x51A003180087100E Ffma
    temp_123 = fma(temp_103, temp_114, fp_c6.data[2].x);
    // 0x000410: 0x51A00B1800971006 Ffma
    temp_124 = fma(temp_103, temp_87, fp_c6.data[2].y);
    // 0x000418: 0x4C58101408171212 Fadd
    temp_125 = fp_c6.data[38].w + fp_c5.data[32].y;
    // 0x000428: 0x4C68101801571114 Fmul
    temp_126 = temp_112 * fp_c6.data[5].y;
    // 0x000430: 0x4C68101801671116 Fmul
    temp_127 = temp_112 * fp_c6.data[5].z;
    // 0x000438: 0xF0F0000034470000 Depbar
    // 0x000448: 0x49A0010400171515 Ffma
    temp_128 = fma(temp_109, fp_c1.data[0].y, temp_41);
    // 0x000450: 0xE043FF8E0077FF02 Ipa
    temp_129 = in_attr6.x;
    // 0x000458: 0x49A0008400170601 Ffma
    temp_130 = fma(temp_124, fp_c1.data[0].y, temp_40);
    // 0x000468: 0x5C68100001371212 Fmul
    temp_131 = temp_125 * temp_116;
    // 0x000470: 0x4C68101801471113 Fmul
    temp_132 = temp_112 * fp_c6.data[5].x;
    // 0x000478: 0x1E23EA2F98371414 Fmul32i
    temp_133 = temp_126 * 0.318309873;
    // 0x000488: 0x49A1079407B70F17 Ffma
    temp_134 = 0.0 - fp_c5.data[30].w;
    temp_135 = fma(temp_122, temp_134, temp_122);
    // 0x000490: 0x1E23EA2F98371619 Fmul32i
    temp_136 = temp_127 * 0.318309873;
    // 0x000498: 0x4C68101808D7120F Fmul
    temp_137 = temp_131 * fp_c6.data[35].y;
    // 0x0004A8: 0x1E23EA2F98371318 Fmul32i
    temp_138 = temp_132 * 0.318309873;
    // 0x0004B0: 0x5080400000371C13 Mufu
    temp_139 = abs(temp_121);
    temp_140 = log2(temp_139);
    // 0x0004B8: 0x4C68101808C71211 Fmul
    temp_141 = temp_131 * fp_c6.data[35].x;
    // 0x0004C8: 0x4C58101407B71717 Fadd
    temp_142 = temp_135 + fp_c5.data[30].w;
    // 0x0004D0: 0x4C68101808E71212 Fmul
    temp_143 = temp_131 * fp_c6.data[35].z;
    // 0x0004D8: 0x49A1079408270F16 Ffma
    temp_144 = 0.0 - fp_c5.data[32].z;
    temp_145 = fma(temp_137, temp_144, temp_137);
    // 0x0004E8: 0x4C68101408270F06 Fmul
    temp_146 = temp_137 * fp_c5.data[32].z;
    // 0x0004F0: 0x49A108940827111A Ffma
    temp_147 = 0.0 - fp_c5.data[32].z;
    temp_148 = fma(temp_141, temp_147, temp_141);
    // 0x0004F8: 0x59A10A000147171B Ffma
    temp_149 = 0.0 - temp_133;
    temp_150 = fma(temp_142, temp_149, temp_133);
    // 0x000508: 0x59A10C0001871718 Ffma
    temp_151 = 0.0 - temp_138;
    temp_152 = fma(temp_142, temp_151, temp_138);
    // 0x000510: 0x59A10C8001971710 Ffma
    temp_153 = 0.0 - temp_136;
    temp_154 = fma(temp_142, temp_153, temp_136);
    // 0x000518: 0x4C68101408271111 Fmul
    temp_155 = temp_141 * fp_c5.data[32].z;
    // 0x000528: 0x4C6810140827120F Fmul
    temp_156 = temp_143 * fp_c5.data[32].z;
    // 0x000530: 0x4C68101406671317 Fmul
    temp_157 = temp_140 * fp_c5.data[25].z;
    // 0x000538: 0x5C58100001671B13 Fadd
    temp_158 = temp_150 + temp_145;
    // 0x000548: 0x49A0000400170E16 Ffma
    temp_159 = fma(temp_123, fp_c1.data[0].y, temp_39);
    // 0x000550: 0x49A109140827120E Ffma
    temp_160 = 0.0 - fp_c5.data[32].z;
    temp_161 = fma(temp_143, temp_160, temp_143);
    // 0x000558: 0x5C58100001A71814 Fadd
    temp_162 = temp_152 + temp_148;
    // 0x000568: 0x010404000007F01C Mov32i
    // 0x000570: 0x5C90008001770000 Rro
    // 0x000578: 0x5C58100000171313 Fadd
    temp_163 = temp_158 + temp_130;
    // 0x000588: 0x5080000000270000 Mufu
    temp_164 = exp2(temp_157);
    // 0x000590: 0x5C58100000E7100E Fadd
    temp_165 = temp_154 + temp_161;
    // 0x000598: 0x5C58100001671414 Fadd
    temp_166 = temp_162 + temp_159;
    // 0x0005A8: 0x0103F8000007F001 Mov32i
    // 0x0005B0: 0x33A00E4000070518 Ffma
    temp_167 = fma(temp_118, -2.0, 3.0);
    // 0x0005B8: 0x5C68100000570505 Fmul
    temp_168 = temp_118 * temp_118;
    // 0x0005C8: 0x5C58100001570E0E Fadd
    temp_169 = temp_165 + temp_128;
    // 0x0005D0: 0x49A0089402C71415 Ffma
    temp_170 = fma(temp_166, fp_c5.data[11].x, temp_155);
    // 0x0005D8: 0x49A0031402D71314 Ffma
    temp_171 = fma(temp_163, fp_c5.data[11].y, temp_146);
    // 0x0005E8: 0x4C5C101402C70110 Fadd
    temp_172 = 1.0 + fp_c5.data[11].x;
    temp_173 = clamp(temp_172, 0.0, 1.0);
    // 0x0005F0: 0x4C5C101402D70106 Fadd
    temp_174 = 1.0 + fp_c5.data[11].y;
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x0005F8: 0x5C68100000571805 Fmul
    temp_176 = temp_167 * temp_168;
    // 0x000608: 0x4C68101801670013 Fmul
    temp_177 = temp_164 * fp_c6.data[5].z;
    // 0x000610: 0x4C68101801470011 Fmul
    temp_178 = temp_164 * fp_c6.data[5].x;
    // 0x000618: 0x4C68101801570012 Fmul
    temp_179 = temp_164 * fp_c6.data[5].y;
    // 0x000628: 0x5C68100001571000 Fmul
    temp_180 = temp_173 * temp_170;
    // 0x000630: 0x4C9807980B470010 Mov
    // 0x000638: 0x49A0079402E70E0E Ffma
    temp_181 = fma(temp_169, fp_c5.data[11].z, temp_156);
    // 0x000648: 0xF0F0000034270000 Depbar
    // 0x000650: 0x59A1098001370C0C Ffma
    temp_182 = 0.0 - temp_177;
    temp_183 = fma(temp_45, temp_182, temp_177);
    // 0x000658: 0x59A1088001170811 Ffma
    temp_184 = 0.0 - temp_178;
    temp_185 = fma(temp_43, temp_184, temp_178);
    // 0x000668: 0x59A1090001270912 Ffma
    temp_186 = 0.0 - temp_179;
    temp_187 = fma(temp_44, temp_186, temp_179);
    // 0x000670: 0x4C9807940687000F Mov
    // 0x000678: 0x4C5C101402E70109 Fadd
    temp_188 = 1.0 + fp_c5.data[11].z;
    temp_189 = clamp(temp_188, 0.0, 1.0);
    // 0x000688: 0x51A208180B470A0A Ffma
    temp_190 = 0.0 - fp_c6.data[45].x;
    temp_191 = fma(temp_47, fp_c6.data[45].x, temp_190);
    // 0x000690: 0x4C68101406770C0C Fmul
    temp_192 = temp_183 * fp_c5.data[25].w;
    // 0x000698: 0x4C68101406771111 Fmul
    temp_193 = temp_185 * fp_c5.data[25].w;
    // 0x0006A8: 0x4C68101406771212 Fmul
    temp_194 = temp_187 * fp_c5.data[25].w;
    // 0x0006B0: 0x51A208180B470B0B Ffma
    temp_195 = 0.0 - fp_c6.data[45].x;
    temp_196 = fma(temp_48, fp_c6.data[45].x, temp_195);
    // 0x0006B8: 0x51A208180B470303 Ffma
    temp_197 = 0.0 - fp_c6.data[45].x;
    temp_198 = fma(temp_49, fp_c6.data[45].x, temp_197);
    // 0x0006C8: 0xF0F0000034170000 Depbar
    // 0x0006D0: 0x49A501180BC70410 Ffma
    temp_199 = 0.0 - fp_c6.data[47].x;
    temp_200 = fma(temp_50, temp_199, temp_129);
    temp_201 = clamp(temp_200, 0.0, 1.0);
    // 0x0006D8: 0x5C68100000E70909 Fmul
    temp_202 = temp_189 * temp_181;
    // 0x0006E8: 0x5080000000371010 Mufu
    temp_203 = log2(temp_201);
    // 0x0006F0: 0x49A0061801670F0C Ffma
    temp_204 = fma(fp_c5.data[26].x, fp_c6.data[5].z, temp_192);
    // 0x0006F8: 0x4C98079802A70004 Mov
    // 0x000708: 0x5C68100001470601 Fmul
    temp_205 = temp_175 * temp_171;
    // 0x000710: 0x49A0089801470F11 Ffma
    temp_206 = fma(fp_c5.data[26].x, fp_c6.data[5].x, temp_193);
    // 0x000718: 0x4C98079802870013 Mov
    // 0x000728: 0x49A0091801570F12 Ffma
    temp_207 = fma(fp_c5.data[26].x, fp_c6.data[5].y, temp_194);
    // 0x000730: 0x4C98079802970006 Mov
    // 0x000738: 0x49A0049406C70C02 Ffma
    temp_208 = fma(temp_204, fp_c5.data[27].x, temp_202);
    // 0x000748: 0xE043FF8B8077FF09 Ipa
    temp_209 = in_attr3.z;
    // 0x000750: 0x51A0021802A70304 Ffma
    temp_210 = fma(temp_198, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000758: 0xE043FF89C077FF03 Ipa
    temp_211 = in_attr1.w;
    // 0x000768: 0x49A0001406C71100 Ffma
    temp_212 = fma(temp_206, fp_c5.data[27].x, temp_180);
    // 0x000770: 0x51A0099802870A0A Ffma
    temp_213 = fma(temp_191, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000778: 0x49A0009406C71201 Ffma
    temp_214 = fma(temp_207, fp_c5.data[27].x, temp_205);
    // 0x000788: 0x51A0031802970B0B Ffma
    temp_215 = fma(temp_196, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000790: 0x4C68101803171010 Fmul
    temp_216 = temp_203 * fp_c6.data[12].y;
    // 0x000798: 0x5C5830000047020E Fadd
    temp_217 = 0.0 - temp_210;
    temp_218 = temp_208 + temp_217;
    // 0x0007A8: 0x4C68101803770505 Fmul
    temp_219 = temp_176 * fp_c6.data[13].w;
    // 0x0007B0: 0x5C58300000A7000F Fadd
    temp_220 = 0.0 - temp_213;
    temp_221 = temp_212 + temp_220;
    // 0x0007B8: 0x5C58300000B70106 Fadd
    temp_222 = 0.0 - temp_215;
    temp_223 = temp_214 + temp_222;
    // 0x0007C8: 0x5C90008001070010 Rro
    // 0x0007D0: 0x49A002180BF70E0E Ffma
    temp_224 = fma(temp_218, fp_c6.data[47].w, temp_210);
    // 0x0007D8: 0x49A2029803570507 Ffma
    temp_225 = 0.0 - temp_219;
    temp_226 = fma(temp_219, fp_c6.data[13].y, temp_225);
    // 0x0007E8: 0x49A005180BF70F0F Ffma
    temp_227 = fma(temp_221, fp_c6.data[47].w, temp_213);
    // 0x0007F0: 0x49A005980BF70606 Ffma
    temp_228 = fma(temp_223, fp_c6.data[47].w, temp_215);
    // 0x0007F8: 0x5C60178000E7040E Fmnmx
    temp_229 = max(temp_210, temp_224);
    // 0x000808: 0x49A2029803470504 Ffma
    temp_230 = 0.0 - temp_219;
    temp_231 = fma(temp_219, fp_c6.data[13].x, temp_230);
    // 0x000810: 0x5C60178000F70A0F Fmnmx
    temp_232 = max(temp_213, temp_227);
    // 0x000818: 0x508000000027100A Mufu
    temp_233 = exp2(temp_216);
    // 0x000828: 0x49A2029803670505 Ffma
    temp_234 = 0.0 - temp_219;
    temp_235 = fma(temp_219, fp_c6.data[13].z, temp_234);
    // 0x000830: 0x5C60178000670B06 Fmnmx
    temp_236 = max(temp_215, temp_228);
    // 0x000838: 0x59A0078000470F0F Ffma
    temp_237 = fma(temp_232, temp_231, temp_232);
    // 0x000848: 0x59A0030000770604 Ffma
    temp_238 = fma(temp_236, temp_226, temp_236);
    // 0x000850: 0x59A0070000570E07 Ffma
    temp_239 = fma(temp_229, temp_235, temp_229);
    // 0x000858: 0x5C59100000F70005 Fadd
    temp_240 = 0.0 - temp_212;
    temp_241 = temp_240 + temp_237;
    // 0x000868: 0x4C68101802B70A0A Fmul
    temp_242 = temp_233 * fp_c6.data[10].w;
    // 0x000870: 0x5C59100000470104 Fadd
    temp_243 = 0.0 - temp_214;
    temp_244 = temp_243 + temp_238;
    // 0x000878: 0x5C59100000770207 Fadd
    temp_245 = 0.0 - temp_208;
    temp_246 = temp_245 + temp_239;
    // 0x000888: 0x59A0000000A70500 Ffma
    temp_247 = fma(temp_241, temp_242, temp_212);
    // 0x000890: 0x59A0008000A70401 Ffma
    temp_248 = fma(temp_244, temp_242, temp_214);
    // 0x000898: 0x59A0010000A70702 Ffma
    temp_249 = fma(temp_246, temp_242, temp_208);
    // 0x0008A8: 0x0103F8000007F005 Mov32i
    // 0x0008B0: 0x32A406C04007080D Ffma
    temp_250 = fma(temp_43, 3.0, temp_55);
    temp_251 = clamp(temp_250, 0.0, 1.0);
    // 0x0008B8: 0x4C58100C03870908 Fadd
    temp_252 = temp_209 + fp_c3.data[14].x;
    // 0x0008C8: 0x4C6C101406370D06 Fmul
    temp_253 = temp_251 * fp_c5.data[24].w;
    temp_254 = clamp(temp_253, 0.0, 1.0);
    // 0x0008D0: 0x49A37F8C03C70804 Ffma
    temp_255 = 0.0 - fp_c3.data[15].x;
    temp_256 = fma(temp_252, temp_255, -0.0);
    // 0x0008D8: 0x5C68100000370603 Fmul
    temp_257 = temp_254 * temp_211;
    // 0x0008E8: 0x5C9807800FF70006 Mov
    // 0x0008F0: 0x5C98078000370007 Mov
    // 0x0008F8: 0xE30000000007000F Exit
    out_attr0.x = temp_247;
    out_attr0.y = temp_248;
    out_attr0.z = temp_249;
    out_attr0.w = temp_257;
    out_attr1.x = temp_256;
    out_attr1.y = 1.0;
    out_attr1.z = 0.0;
    out_attr1.w = temp_257;
    return;
}
