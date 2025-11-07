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

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_24;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform samplerCube fp_t_tcb_16;
layout (binding = 3) uniform sampler2D fp_t_tcb_30;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec4 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    bool temp_7;
    precise vec2 temp_8;
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
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise vec3 temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise vec3 temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise vec3 temp_92;
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
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    // 0x000008: 0x4C98079C0207001B Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF8D0007FF01 Ipa
    temp_0 = in_attr5.x;
    // 0x000030: 0xE043FF8D4007FF02 Ipa
    temp_1 = in_attr5.y;
    // 0x000038: 0xD8320240E027010C Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    temp_5 = temp_2.z;
    temp_6 = temp_2.w;
    // 0x000048: 0x5C98078000F70007 Mov
    // 0x000050: 0x4BB1839406070707 Fsetp
    temp_7 = temp_6 < fp_c5.data[24].x;
    // 0x000058: 0xE33000000000000F Kil
    if (temp_7)
    {
        discard;
    }
    // 0x000068: 0xD830026FF0270104 Texs
    temp_8 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_9 = temp_8.x;
    temp_10 = temp_8.y;
    // 0x000070: 0xE043FF8A0007FF09 Ipa
    temp_11 = in_attr2.x;
    // 0x000078: 0xE043FF890007FF11 Ipa
    temp_12 = in_attr1.x;
    // 0x000088: 0xE043FF8A4007FF0A Ipa
    temp_13 = in_attr2.y;
    // 0x000090: 0xE043FF894007FF0F Ipa
    temp_14 = in_attr1.y;
    // 0x000098: 0xE043FF8A8007FF0B Ipa
    temp_15 = in_attr2.z;
    // 0x0000A8: 0xE043FF898007FF13 Ipa
    temp_16 = in_attr1.z;
    // 0x0000B0: 0xE043FF880007FF06 Ipa
    temp_17 = in_attr0.x;
    // 0x0000B8: 0xE043FF884007FF03 Ipa
    temp_18 = in_attr0.y;
    // 0x0000C8: 0x5C68100000970908 Fmul
    temp_19 = temp_11 * temp_11;
    // 0x0000D0: 0x5C68100001171112 Fmul
    temp_20 = temp_12 * temp_12;
    // 0x0000D8: 0x59A0040000A70A10 Ffma
    temp_21 = fma(temp_13, temp_13, temp_19);
    // 0x0000E8: 0xE043FF888007FF08 Ipa
    temp_22 = in_attr0.z;
    // 0x0000F0: 0x59A0090000F70F12 Ffma
    temp_23 = fma(temp_14, temp_14, temp_20);
    // 0x0000F8: 0x5C68100000670615 Fmul
    temp_24 = temp_17 * temp_17;
    // 0x000108: 0x59A0080000B70B10 Ffma
    temp_25 = fma(temp_15, temp_15, temp_21);
    // 0x000110: 0x59A0090001371314 Ffma
    temp_26 = fma(temp_16, temp_16, temp_23);
    // 0x000118: 0x5080000000571010 Mufu
    temp_27 = inversesqrt(temp_25);
    // 0x000128: 0x59A00A8000370315 Ffma
    temp_28 = fma(temp_18, temp_18, temp_24);
    // 0x000130: 0x5080000000571414 Mufu
    temp_29 = inversesqrt(temp_26);
    // 0x000138: 0x5C68100001070912 Fmul
    temp_30 = temp_11 * temp_27;
    // 0x000148: 0x5C68100001070A0A Fmul
    temp_31 = temp_13 * temp_27;
    // 0x000150: 0x5C68100001471309 Fmul
    temp_32 = temp_16 * temp_29;
    // 0x000158: 0x5C68100001471111 Fmul
    temp_33 = temp_12 * temp_29;
    // 0x000168: 0x5C68100001070B0B Fmul
    temp_34 = temp_15 * temp_27;
    // 0x000170: 0x5C68100001470F0F Fmul
    temp_35 = temp_14 * temp_29;
    // 0x000178: 0x59A00A8000870815 Ffma
    temp_36 = fma(temp_22, temp_22, temp_28);
    // 0x000188: 0x5080000000571515 Mufu
    temp_37 = inversesqrt(temp_36);
    // 0x000190: 0x5C68100001570606 Fmul
    temp_38 = temp_17 * temp_37;
    // 0x000198: 0x5C68100001570303 Fmul
    temp_39 = temp_18 * temp_37;
    // 0x0001A8: 0x5C68100001570808 Fmul
    temp_40 = temp_22 * temp_37;
    // 0x0001B0: 0x5C68100000570513 Fmul
    temp_41 = temp_10 * temp_10;
    // 0x0001B8: 0x5C68100001270512 Fmul
    temp_42 = temp_10 * temp_30;
    // 0x0001C8: 0x5C68100000A7050A Fmul
    temp_43 = temp_10 * temp_31;
    // 0x0001D0: 0x5C68100000B7050B Fmul
    temp_44 = temp_10 * temp_34;
    // 0x0001D8: 0x59A0098000470413 Ffma
    temp_45 = fma(temp_9, temp_9, temp_41);
    // 0x0001E8: 0x59A0090001170411 Ffma
    temp_46 = fma(temp_9, temp_33, temp_42);
    // 0x0001F0: 0x59A0050000F7040A Ffma
    temp_47 = fma(temp_9, temp_35, temp_43);
    // 0x0001F8: 0x59A0058000970409 Ffma
    temp_48 = fma(temp_9, temp_32, temp_44);
    // 0x000208: 0x385D103F80071313 Fadd
    temp_49 = 0.0 - temp_45;
    temp_50 = temp_49 + 1.0;
    temp_51 = clamp(temp_50, 0.0, 1.0);
    // 0x000210: 0x5080000000871313 Mufu
    temp_52 = sqrt(temp_51);
    // 0x000218: 0x59A0088001370606 Ffma
    temp_53 = fma(temp_38, temp_52, temp_46);
    // 0x000228: 0x59A0050001370303 Ffma
    temp_54 = fma(temp_39, temp_52, temp_47);
    // 0x000230: 0x59A0048001370808 Ffma
    temp_55 = fma(temp_40, temp_52, temp_48);
    // 0x000238: 0xE003FF874FF7FF09 Ipa
    temp_56 = gl_FragCoord.y;
    temp_57 = support_buffer.render_scale[0];
    temp_58 = temp_56 / temp_57;
    // 0x000248: 0x5C68100000670604 Fmul
    temp_59 = temp_53 * temp_53;
    // 0x000250: 0x59A0020000370305 Ffma
    temp_60 = fma(temp_54, temp_54, temp_59);
    // 0x000258: 0xE003FF870FF7FF04 Ipa
    temp_61 = gl_FragCoord.x;
    temp_62 = support_buffer.render_scale[0];
    temp_63 = temp_61 / temp_62;
    // 0x000268: 0x59A0028000870805 Ffma
    temp_64 = fma(temp_55, temp_55, temp_60);
    // 0x000270: 0x5080000000570505 Mufu
    temp_65 = inversesqrt(temp_64);
    // 0x000278: 0x4C68100C04B70910 Fmul
    temp_66 = temp_58 * fp_c3.data[18].w;
    // 0x000288: 0x5C6810000057060F Fmul
    temp_67 = temp_53 * temp_65;
    // 0x000290: 0x5C68100000570312 Fmul
    temp_68 = temp_54 * temp_65;
    // 0x000298: 0x5C68100000570813 Fmul
    temp_69 = temp_55 * temp_65;
    // 0x0002A8: 0xE043FF904007FF05 Ipa
    temp_70 = in_attr8.y;
    // 0x0002B0: 0x5C62578001270F06 Fmnmx
    temp_71 = abs(temp_67);
    temp_72 = abs(temp_68);
    temp_73 = max(temp_71, temp_72);
    // 0x0002B8: 0x4C68100C04A7040B Fmul
    temp_74 = temp_63 * fp_c3.data[18].z;
    // 0x0002C8: 0xE043FF900007FF04 Ipa
    temp_75 = in_attr8.x;
    // 0x0002D0: 0x5C60578000671303 Fmnmx
    temp_76 = abs(temp_69);
    temp_77 = max(temp_76, temp_73);
    // 0x0002D8: 0xE043FF908007FF06 Ipa
    temp_78 = in_attr8.z;
    // 0x0002E8: 0x5080000000470311 Mufu
    temp_79 = 1.0 / temp_77;
    // 0x0002F0: 0x5C68100001170F08 Fmul
    temp_80 = temp_67 * temp_79;
    // 0x0002F8: 0x5C68100001171209 Fmul
    temp_81 = temp_68 * temp_79;
    // 0x000308: 0x5C6910000117130A Fmul
    temp_82 = 0.0 - temp_79;
    temp_83 = temp_69 * temp_82;
    // 0x000310: 0xC0BA0163EFF70808 Tex
    temp_84 = textureLod(fp_t_tcb_16, vec3(temp_80, temp_81, temp_83), 0.0).xyz;
    temp_85 = temp_84.x;
    temp_86 = temp_84.y;
    temp_87 = temp_84.z;
    // 0x000318: 0xD822030010270102 Texs
    temp_88 = texture(fp_t_tcb_30, vec2(temp_0, temp_1)).xyz;
    temp_89 = temp_88.x;
    temp_90 = temp_88.y;
    temp_91 = temp_88.z;
    // 0x000328: 0xD8220200B1070B10 Texs
    temp_92 = texture(fp_t_tcb_20, vec2(temp_74, temp_66)).xyz;
    temp_93 = temp_92.x;
    temp_94 = temp_92.y;
    temp_95 = temp_92.z;
    // 0x000330: 0xDEBA0000C1B70404 TexB
    temp_96 = texture(fp_t_cb7_20, vec3(temp_75, temp_70, temp_78)).x;
    // 0x000338: 0xE043FF8B0007FF14 Ipa
    temp_97 = in_attr3.x;
    // 0x000348: 0xE043FF8B4007FF15 Ipa
    temp_98 = in_attr3.y;
    // 0x000350: 0xE043FF8B8007FF16 Ipa
    temp_99 = in_attr3.z;
    // 0x000358: 0x5C68100001471417 Fmul
    temp_100 = temp_97 * temp_97;
    // 0x000368: 0x59A00B8001571517 Ffma
    temp_101 = fma(temp_98, temp_98, temp_100);
    // 0x000370: 0x59A00B8001671617 Ffma
    temp_102 = fma(temp_99, temp_99, temp_101);
    // 0x000378: 0x5080000000571717 Mufu
    temp_103 = inversesqrt(temp_102);
    // 0x000388: 0x5C69100001771414 Fmul
    temp_104 = 0.0 - temp_103;
    temp_105 = temp_97 * temp_104;
    // 0x000390: 0x5C69100001771515 Fmul
    temp_106 = 0.0 - temp_103;
    temp_107 = temp_98 * temp_106;
    // 0x000398: 0x4C58301805C71419 Fadd
    temp_108 = 0.0 - fp_c6.data[23].x;
    temp_109 = temp_105 + temp_108;
    // 0x0003A8: 0x5C69100001771605 Fmul
    temp_110 = 0.0 - temp_103;
    temp_111 = temp_99 * temp_110;
    // 0x0003B0: 0x4C58301805D71516 Fadd
    temp_112 = 0.0 - fp_c6.data[23].y;
    temp_113 = temp_107 + temp_112;
    // 0x0003B8: 0x5C68100001470F17 Fmul
    temp_114 = temp_67 * temp_105;
    // 0x0003C8: 0x4C69101805C70F0F Fmul
    temp_115 = 0.0 - fp_c6.data[23].x;
    temp_116 = temp_67 * temp_115;
    // 0x0003D0: 0x5C68100001971918 Fmul
    temp_117 = temp_109 * temp_109;
    // 0x0003D8: 0x4C58301805E70506 Fadd
    temp_118 = 0.0 - fp_c6.data[23].z;
    temp_119 = temp_111 + temp_118;
    // 0x0003E8: 0x59A00C0001671618 Ffma
    temp_120 = fma(temp_113, temp_113, temp_117);
    // 0x0003F0: 0x59A00C000067061A Ffma
    temp_121 = fma(temp_119, temp_119, temp_120);
    // 0x0003F8: 0x59A00B8001571218 Ffma
    temp_122 = fma(temp_68, temp_107, temp_114);
    // 0x000408: 0x5080000000571A1B Mufu
    temp_123 = inversesqrt(temp_121);
    // 0x000410: 0x4C98079800570017 Mov
    // 0x000418: 0x59A40C0000571318 Ffma
    temp_124 = fma(temp_69, temp_111, temp_122);
    temp_125 = clamp(temp_124, 0.0, 1.0);
    // 0x000428: 0x3859103F80071818 Fadd
    temp_126 = 0.0 - temp_125;
    temp_127 = temp_126 + 1.0;
    // 0x000430: 0x5C68100001B71919 Fmul
    temp_128 = temp_109 * temp_123;
    // 0x000438: 0x5C68100001B71616 Fmul
    temp_129 = temp_113 * temp_123;
    // 0x000448: 0x5C68100001B70606 Fmul
    temp_130 = temp_119 * temp_123;
    // 0x000450: 0x4C68101809071818 Fmul
    temp_131 = temp_127 * fp_c6.data[36].x;
    // 0x000458: 0x5C68100001971414 Fmul
    temp_132 = temp_105 * temp_128;
    // 0x000468: 0x5080400000371818 Mufu
    temp_133 = abs(temp_131);
    temp_134 = log2(temp_133);
    // 0x000470: 0x4C98079800670019 Mov
    // 0x000478: 0x59A00A0001671514 Ffma
    temp_135 = fma(temp_107, temp_129, temp_132);
    // 0x000488: 0x4C98079800470016 Mov
    // 0x000490: 0x59A40A0000670506 Ffma
    temp_136 = fma(temp_111, temp_130, temp_135);
    temp_137 = clamp(temp_136, 0.0, 1.0);
    // 0x000498: 0x01040DF760C7F005 Mov32i
    // 0x0004A8: 0x4C68101809171814 Fmul
    temp_138 = temp_134 * fp_c6.data[36].y;
    // 0x0004B0: 0x0103F0000007F018 Mov32i
    // 0x0004B8: 0x49A2028400070605 Ffma
    temp_139 = fma(temp_137, fp_c1.data[0].x, -6.98316002);
    // 0x0004C8: 0x5C90008001470014 Rro
    // 0x0004D0: 0x5084000000271414 Mufu
    temp_140 = exp2(temp_138);
    temp_141 = clamp(temp_140, 0.0, 1.0);
    // 0x0004D8: 0x5C68100000570605 Fmul
    temp_142 = temp_137 * temp_139;
    // 0x0004E8: 0x4C98079809A70006 Mov
    // 0x0004F0: 0x5C90008000570015 Rro
    // 0x0004F8: 0x49A1079805D71205 Ffma
    temp_143 = 0.0 - fp_c6.data[23].y;
    temp_144 = fma(temp_68, temp_143, temp_116);
    // 0x000508: 0x5080000000271515 Mufu
    temp_145 = exp2(temp_142);
    // 0x000510: 0x4C5810140817060F Fadd
    temp_146 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x000518: 0x32A00C3F00071212 Ffma
    temp_147 = fma(temp_68, 0.5, 0.5);
    // 0x000528: 0x49A5029805E71306 Ffma
    temp_148 = 0.0 - fp_c6.data[23].z;
    temp_149 = fma(temp_69, temp_148, temp_144);
    temp_150 = clamp(temp_149, 0.0, 1.0);
    // 0x000530: 0x5C68100001470F05 Fmul
    temp_151 = temp_146 * temp_141;
    // 0x000538: 0x4C5830180087160F Fadd
    temp_152 = 0.0 - fp_c6.data[2].x;
    temp_153 = fp_c6.data[1].x + temp_152;
    // 0x000548: 0x4C58301800971713 Fadd
    temp_154 = 0.0 - fp_c6.data[2].y;
    temp_155 = fp_c6.data[1].y + temp_154;
    // 0x000550: 0x4C58301800A71917 Fadd
    temp_156 = 0.0 - fp_c6.data[2].z;
    temp_157 = fp_c6.data[1].z + temp_156;
    // 0x000558: 0x4C68101801470614 Fmul
    temp_158 = temp_150 * fp_c6.data[5].x;
    // 0x000568: 0x49A10A9407B71518 Ffma
    temp_159 = 0.0 - fp_c5.data[30].w;
    temp_160 = fma(temp_145, temp_159, temp_145);
    // 0x000570: 0x4C68101801570615 Fmul
    temp_161 = temp_150 * fp_c6.data[5].y;
    // 0x000578: 0x4C68101801670616 Fmul
    temp_162 = temp_150 * fp_c6.data[5].z;
    // 0x000588: 0x51A0091800870F06 Ffma
    temp_163 = fma(temp_153, temp_147, fp_c6.data[2].x);
    // 0x000590: 0xE04BFF8F4007FF0F Ipa
    temp_164 = in_attr7.y;
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x000598: 0x51A0091800971313 Ffma
    temp_166 = fma(temp_155, temp_147, fp_c6.data[2].y);
    // 0x0005A8: 0x1E23EA2F98371419 Fmul32i
    temp_167 = temp_158 * 0.318309873;
    // 0x0005B0: 0x4C58101407B71818 Fadd
    temp_168 = temp_160 + fp_c5.data[30].w;
    // 0x0005B8: 0x1E23EA2F9837151A Fmul32i
    temp_169 = temp_161 * 0.318309873;
    // 0x0005C8: 0x1E23EA2F98371616 Fmul32i
    temp_170 = temp_162 * 0.318309873;
    // 0x0005D0: 0x4C68101808C70514 Fmul
    temp_171 = temp_151 * fp_c6.data[35].x;
    // 0x0005D8: 0x51A0091800A71715 Ffma
    temp_172 = fma(temp_157, temp_147, fp_c6.data[2].z);
    // 0x0005E8: 0x4C68101808D70512 Fmul
    temp_173 = temp_151 * fp_c6.data[35].y;
    // 0x0005F0: 0x59A10C8001971817 Ffma
    temp_174 = 0.0 - temp_167;
    temp_175 = fma(temp_168, temp_174, temp_167);
    // 0x0005F8: 0x59A10D0001A7181A Ffma
    temp_176 = 0.0 - temp_169;
    temp_177 = fma(temp_168, temp_176, temp_169);
    // 0x000608: 0x59A10B0001671818 Ffma
    temp_178 = 0.0 - temp_170;
    temp_179 = fma(temp_168, temp_178, temp_170);
    // 0x000610: 0x49A10A1408271416 Ffma
    temp_180 = 0.0 - fp_c5.data[32].z;
    temp_181 = fma(temp_171, temp_180, temp_171);
    // 0x000618: 0x4C68101808E70505 Fmul
    temp_182 = temp_151 * fp_c6.data[35].z;
    // 0x000628: 0x49A1091408271219 Ffma
    temp_183 = 0.0 - fp_c5.data[32].z;
    temp_184 = fma(temp_173, temp_183, temp_173);
    // 0x000630: 0x4C68101408271212 Fmul
    temp_185 = temp_173 * fp_c5.data[32].z;
    // 0x000638: 0x5C58100001671717 Fadd
    temp_186 = temp_175 + temp_181;
    // 0x000648: 0x5C58100001971A16 Fadd
    temp_187 = temp_177 + temp_184;
    // 0x000650: 0x010404000007F019 Mov32i
    // 0x000658: 0x33A00CC000070F19 Ffma
    temp_188 = fma(temp_165, -2.0, 3.0);
    // 0x000668: 0x5C68100000F70F0F Fmul
    temp_189 = temp_165 * temp_165;
    // 0x000670: 0xF0F0000034370000 Depbar
    // 0x000678: 0x49A0040400170608 Ffma
    temp_190 = fma(temp_163, fp_c1.data[0].y, temp_85);
    // 0x000688: 0x49A1029408270506 Ffma
    temp_191 = 0.0 - fp_c5.data[32].z;
    temp_192 = fma(temp_182, temp_191, temp_182);
    // 0x000690: 0x49A0048400171313 Ffma
    temp_193 = fma(temp_166, fp_c1.data[0].y, temp_86);
    // 0x000698: 0xE043FF8F0007FF09 Ipa
    temp_194 = in_attr7.x;
    // 0x0006A8: 0x49A0050400171515 Ffma
    temp_195 = fma(temp_172, fp_c1.data[0].y, temp_87);
    // 0x0006B0: 0x4C6810140827140A Fmul
    temp_196 = temp_171 * fp_c5.data[32].z;
    // 0x0006B8: 0x4C68101408270505 Fmul
    temp_197 = temp_182 * fp_c5.data[32].z;
    // 0x0006C8: 0x5C58100001770817 Fadd
    temp_198 = temp_190 + temp_186;
    // 0x0006D0: 0x5C58100000671818 Fadd
    temp_199 = temp_179 + temp_192;
    // 0x0006D8: 0x5C58100001671313 Fadd
    temp_200 = temp_193 + temp_187;
    // 0x0006E8: 0x5C68100000F71906 Fmul
    temp_201 = temp_188 * temp_189;
    // 0x0006F0: 0x4C98079406B7000F Mov
    // 0x0006F8: 0x385C103F80070D08 Fadd
    temp_202 = temp_4 + 1.0;
    temp_203 = clamp(temp_202, 0.0, 1.0);
    // 0x000708: 0x59A0050001770C17 Ffma
    temp_204 = fma(temp_3, temp_198, temp_196);
    // 0x000710: 0x5C58100001871518 Fadd
    temp_205 = temp_195 + temp_199;
    // 0x000718: 0x59A0090001370D12 Ffma
    temp_206 = fma(temp_4, temp_200, temp_185);
    // 0x000728: 0x385C103F80070C0C Fadd
    temp_207 = temp_3 + 1.0;
    temp_208 = clamp(temp_207, 0.0, 1.0);
    // 0x000730: 0x4C68101809C70F0D Fmul
    temp_209 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x000738: 0x385C103F80070E0A Fadd
    temp_210 = temp_5 + 1.0;
    temp_211 = clamp(temp_210, 0.0, 1.0);
    // 0x000748: 0x4C68101803770606 Fmul
    temp_212 = temp_201 * fp_c6.data[13].w;
    // 0x000750: 0x59A0028001870E18 Ffma
    temp_213 = fma(temp_5, temp_205, temp_197);
    // 0x000758: 0x5C68100001270805 Fmul
    temp_214 = temp_203 * temp_206;
    // 0x000768: 0x4C9807980B470012 Mov
    // 0x000770: 0x4C68101809D70F08 Fmul
    temp_215 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x000778: 0x4C68101809E70F0E Fmul
    temp_216 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x000788: 0x5C68100001770C0C Fmul
    temp_217 = temp_208 * temp_204;
    // 0x000790: 0x5C68100000D70202 Fmul
    temp_218 = temp_89 * temp_209;
    // 0x000798: 0x4C9807980287000D Mov
    // 0x0007A8: 0x51A209180B471010 Ffma
    temp_219 = 0.0 - fp_c6.data[45].x;
    temp_220 = fma(temp_93, fp_c6.data[45].x, temp_219);
    // 0x0007B0: 0x5C68100000870303 Fmul
    temp_221 = temp_90 * temp_215;
    // 0x0007B8: 0x5C68100000E70108 Fmul
    temp_222 = temp_91 * temp_216;
    // 0x0007C8: 0x51A209180B471111 Ffma
    temp_223 = 0.0 - fp_c6.data[45].x;
    temp_224 = fma(temp_94, fp_c6.data[45].x, temp_223);
    // 0x0007D0: 0x49A0061406C70201 Ffma
    temp_225 = fma(temp_218, fp_c5.data[27].x, temp_217);
    // 0x0007D8: 0x49A504980BC7040C Ffma
    temp_226 = 0.0 - fp_c6.data[47].x;
    temp_227 = fma(temp_96, temp_226, temp_194);
    temp_228 = clamp(temp_227, 0.0, 1.0);
    // 0x0007E8: 0x51A0069802871010 Ffma
    temp_229 = fma(temp_220, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0007F0: 0xE043FF8C8007FF0D Ipa
    temp_230 = in_attr4.z;
    // 0x0007F8: 0x4C9807980297000E Mov
    // 0x000808: 0x5080000000370C0C Mufu
    temp_231 = log2(temp_228);
    // 0x000810: 0x5C68100001870A0A Fmul
    temp_232 = temp_211 * temp_213;
    // 0x000818: 0x51A209180B470B0B Ffma
    temp_233 = 0.0 - fp_c6.data[45].x;
    temp_234 = fma(temp_95, fp_c6.data[45].x, temp_233);
    // 0x000828: 0x4C98079802A70004 Mov
    // 0x000830: 0x49A0029406C70302 Ffma
    temp_235 = fma(temp_221, fp_c5.data[27].x, temp_214);
    // 0x000838: 0x5C58300001070105 Fadd
    temp_236 = 0.0 - temp_229;
    temp_237 = temp_225 + temp_236;
    // 0x000848: 0x51A0071802971111 Ffma
    temp_238 = fma(temp_224, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000850: 0x49A0051406C70803 Ffma
    temp_239 = fma(temp_222, fp_c5.data[27].x, temp_232);
    // 0x000858: 0x49A2031803470600 Ffma
    temp_240 = 0.0 - temp_212;
    temp_241 = fma(temp_212, fp_c6.data[13].x, temp_240);
    // 0x000868: 0x51A0021802A70B04 Ffma
    temp_242 = fma(temp_234, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000870: 0x49A008180BF70509 Ffma
    temp_243 = fma(temp_237, fp_c6.data[47].w, temp_229);
    // 0x000878: 0x5C58300001170208 Fadd
    temp_244 = 0.0 - temp_238;
    temp_245 = temp_235 + temp_244;
    // 0x000888: 0x4C68101803170C0A Fmul
    temp_246 = temp_231 * fp_c6.data[12].y;
    // 0x000890: 0x5C58300000470305 Fadd
    temp_247 = 0.0 - temp_242;
    temp_248 = temp_239 + temp_247;
    // 0x000898: 0x5C60178000971009 Fmnmx
    temp_249 = max(temp_229, temp_243);
    // 0x0008A8: 0x49A008980BF70808 Ffma
    temp_250 = fma(temp_245, fp_c6.data[47].w, temp_238);
    // 0x0008B0: 0x5C90008000A7000B Rro
    // 0x0008B8: 0x49A203180357060A Ffma
    temp_251 = 0.0 - temp_212;
    temp_252 = fma(temp_212, fp_c6.data[13].y, temp_251);
    // 0x0008C8: 0x5080000000270B0B Mufu
    temp_253 = exp2(temp_246);
    // 0x0008D0: 0x49A002180BF70505 Ffma
    temp_254 = fma(temp_248, fp_c6.data[47].w, temp_242);
    // 0x0008D8: 0x49A2031803670606 Ffma
    temp_255 = 0.0 - temp_212;
    temp_256 = fma(temp_212, fp_c6.data[13].z, temp_255);
    // 0x0008E8: 0x59A0048000070900 Ffma
    temp_257 = fma(temp_249, temp_241, temp_249);
    // 0x0008F0: 0x5C60178000871108 Fmnmx
    temp_258 = max(temp_238, temp_250);
    // 0x0008F8: 0x5C60178000570405 Fmnmx
    temp_259 = max(temp_242, temp_254);
    // 0x000908: 0x5C59100000070100 Fadd
    temp_260 = 0.0 - temp_225;
    temp_261 = temp_260 + temp_257;
    // 0x000910: 0x59A0040000A70804 Ffma
    temp_262 = fma(temp_258, temp_252, temp_258);
    // 0x000918: 0x4C58100C03870D08 Fadd
    temp_263 = temp_230 + fp_c3.data[14].x;
    // 0x000928: 0x59A0028000670505 Ffma
    temp_264 = fma(temp_259, temp_256, temp_259);
    // 0x000930: 0x4C68101802B70B06 Fmul
    temp_265 = temp_253 * fp_c6.data[10].w;
    // 0x000938: 0x5C59100000470204 Fadd
    temp_266 = 0.0 - temp_235;
    temp_267 = temp_266 + temp_262;
    // 0x000948: 0x5C59100000570305 Fadd
    temp_268 = 0.0 - temp_239;
    temp_269 = temp_268 + temp_264;
    // 0x000950: 0x59A0008000670000 Ffma
    temp_270 = fma(temp_261, temp_265, temp_225);
    // 0x000958: 0x59A0010000670401 Ffma
    temp_271 = fma(temp_267, temp_265, temp_235);
    // 0x000968: 0x49A37F8C03C70804 Ffma
    temp_272 = 0.0 - fp_c3.data[15].x;
    temp_273 = fma(temp_263, temp_272, -0.0);
    // 0x000970: 0x59A0018000670502 Ffma
    temp_274 = fma(temp_269, temp_265, temp_239);
    // 0x000978: 0x0103F6000007F005 Mov32i
    // 0x000988: 0x5C9807800FF70006 Mov
    // 0x000990: 0x5C98078000770003 Mov
    // 0x000998: 0xE30000000007000F Exit
    out_attr0.x = temp_270;
    out_attr0.y = temp_271;
    out_attr0.z = temp_274;
    out_attr0.w = temp_6;
    out_attr1.x = temp_273;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_6;
    return;
}
