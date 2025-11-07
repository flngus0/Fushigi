#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
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

layout (binding = 9, std140) uniform _vp_c8
{
    precise vec4 data[4096];
} vp_c8;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (location = 0) in vec4 in_attr0;
layout (location = 4) in vec4 in_attr4;
layout (location = 6) in vec4 in_attr6;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    int temp_7;
    int temp_8;
    int temp_9;
    int temp_10;
    uint temp_11;
    int temp_12;
    int temp_13;
    int temp_14;
    int temp_15;
    int temp_16;
    uint temp_17;
    uint temp_18;
    int temp_19;
    precise float temp_20;
    int temp_21;
    uint temp_22;
    int temp_23;
    precise float temp_24;
    uint temp_25;
    int temp_26;
    int temp_27;
    int temp_28;
    int temp_29;
    uint temp_30;
    uint temp_31;
    int temp_32;
    precise float temp_33;
    int temp_34;
    uint temp_35;
    int temp_36;
    precise float temp_37;
    uint temp_38;
    int temp_39;
    int temp_40;
    int temp_41;
    int temp_42;
    uint temp_43;
    uint temp_44;
    int temp_45;
    precise float temp_46;
    int temp_47;
    uint temp_48;
    int temp_49;
    precise float temp_50;
    int temp_51;
    uint temp_52;
    uint temp_53;
    int temp_54;
    precise float temp_55;
    int temp_56;
    uint temp_57;
    int temp_58;
    precise float temp_59;
    uint temp_60;
    uint temp_61;
    int temp_62;
    precise float temp_63;
    int temp_64;
    uint temp_65;
    int temp_66;
    precise float temp_67;
    int temp_68;
    uint temp_69;
    uint temp_70;
    int temp_71;
    precise float temp_72;
    int temp_73;
    uint temp_74;
    int temp_75;
    precise float temp_76;
    uint temp_77;
    uint temp_78;
    int temp_79;
    precise float temp_80;
    int temp_81;
    uint temp_82;
    int temp_83;
    precise float temp_84;
    int temp_85;
    uint temp_86;
    uint temp_87;
    int temp_88;
    precise float temp_89;
    int temp_90;
    uint temp_91;
    int temp_92;
    precise float temp_93;
    int temp_94;
    uint temp_95;
    uint temp_96;
    int temp_97;
    precise float temp_98;
    int temp_99;
    uint temp_100;
    int temp_101;
    precise float temp_102;
    int temp_103;
    uint temp_104;
    uint temp_105;
    int temp_106;
    precise float temp_107;
    int temp_108;
    uint temp_109;
    int temp_110;
    precise float temp_111;
    int temp_112;
    uint temp_113;
    uint temp_114;
    int temp_115;
    precise float temp_116;
    int temp_117;
    uint temp_118;
    int temp_119;
    precise float temp_120;
    int temp_121;
    uint temp_122;
    uint temp_123;
    int temp_124;
    precise float temp_125;
    int temp_126;
    uint temp_127;
    int temp_128;
    precise float temp_129;
    int temp_130;
    uint temp_131;
    uint temp_132;
    int temp_133;
    precise float temp_134;
    int temp_135;
    uint temp_136;
    int temp_137;
    precise float temp_138;
    int temp_139;
    uint temp_140;
    uint temp_141;
    int temp_142;
    precise float temp_143;
    int temp_144;
    uint temp_145;
    int temp_146;
    precise float temp_147;
    int temp_148;
    uint temp_149;
    uint temp_150;
    int temp_151;
    precise float temp_152;
    int temp_153;
    uint temp_154;
    int temp_155;
    precise float temp_156;
    int temp_157;
    uint temp_158;
    uint temp_159;
    int temp_160;
    precise float temp_161;
    int temp_162;
    uint temp_163;
    int temp_164;
    precise float temp_165;
    int temp_166;
    uint temp_167;
    uint temp_168;
    int temp_169;
    precise float temp_170;
    int temp_171;
    uint temp_172;
    int temp_173;
    precise float temp_174;
    int temp_175;
    uint temp_176;
    uint temp_177;
    int temp_178;
    precise float temp_179;
    int temp_180;
    uint temp_181;
    int temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    int temp_189;
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
    int temp_208;
    precise float temp_209;
    int temp_210;
    uint temp_211;
    uint temp_212;
    int temp_213;
    precise float temp_214;
    precise float temp_215;
    int temp_216;
    uint temp_217;
    uint temp_218;
    int temp_219;
    precise float temp_220;
    int temp_221;
    uint temp_222;
    int temp_223;
    precise float temp_224;
    precise float temp_225;
    int temp_226;
    uint temp_227;
    uint temp_228;
    int temp_229;
    precise float temp_230;
    int temp_231;
    uint temp_232;
    int temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    int temp_238;
    uint temp_239;
    uint temp_240;
    int temp_241;
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
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x010000000107F022 Mov32i
    // 0x000010: 0xEFD87F800E47FF01 Ald
    temp_0 = in_attr6.y;
    // 0x000018: 0xEFD87F800E87FF00 Ald
    temp_1 = in_attr6.z;
    // 0x000028: 0xEFD87F800E07FF02 Ald
    temp_2 = in_attr6.x;
    // 0x000030: 0xEFD87F800807FF27 Ald
    temp_3 = in_attr0.x;
    // 0x000038: 0xEFD87F800847FF24 Ald
    temp_4 = in_attr0.y;
    // 0x000048: 0xEFD87F800887FF25 Ald
    temp_5 = in_attr0.z;
    // 0x000050: 0x36007F8003070108 Xmad
    temp_6 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_7 = temp_6 * 48;
    // 0x000058: 0x3600110003070022 Xmad
    temp_8 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_9 = temp_8 * 48;
    temp_10 = temp_9 + 16;
    // 0x000068: 0x3620041003070108 Xmad
    temp_11 = floatBitsToUint(temp_0) >> 16;
    temp_12 = int(temp_11) * 48;
    temp_13 = temp_12 << 16;
    temp_14 = temp_13 + temp_7;
    // 0x000070: 0x36007F800307020C Xmad
    temp_15 = floatBitsToInt(temp_2) & 0xFFFF;
    temp_16 = temp_15 * 48;
    // 0x000078: 0xEF95008000070804 Ldc
    temp_17 = uint(temp_14) >> 2;
    temp_18 = temp_17 >> 2;
    temp_19 = int(temp_17) & 3;
    temp_20 = vp_c8.data[int(temp_18)][temp_19];
    temp_21 = int(temp_17) + 1;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_21 & 3;
    temp_24 = vp_c8.data[int(temp_22)][temp_23];
    // 0x000088: 0x3620111003070022 Xmad
    temp_25 = floatBitsToUint(temp_1) >> 16;
    temp_26 = int(temp_25) * 48;
    temp_27 = temp_26 << 16;
    temp_28 = temp_27 + temp_10;
    // 0x000090: 0xEF9500800207081E Ldc
    temp_29 = temp_14 + 32;
    temp_30 = uint(temp_29) >> 2;
    temp_31 = temp_30 >> 2;
    temp_32 = int(temp_30) & 3;
    temp_33 = vp_c8.data[int(temp_31)][temp_32];
    temp_34 = int(temp_30) + 1;
    temp_35 = uint(temp_34) >> 2;
    temp_36 = temp_34 & 3;
    temp_37 = vp_c8.data[int(temp_35)][temp_36];
    // 0x000098: 0x362006100307020C Xmad
    temp_38 = floatBitsToUint(temp_2) >> 16;
    temp_39 = int(temp_38) * 48;
    temp_40 = temp_39 << 16;
    temp_41 = temp_40 + temp_16;
    // 0x0000A8: 0xEF95008001070820 Ldc
    temp_42 = temp_14 + 16;
    temp_43 = uint(temp_42) >> 2;
    temp_44 = temp_43 >> 2;
    temp_45 = int(temp_43) & 3;
    temp_46 = vp_c8.data[int(temp_44)][temp_45];
    temp_47 = int(temp_43) + 1;
    temp_48 = uint(temp_47) >> 2;
    temp_49 = temp_47 & 3;
    temp_50 = vp_c8.data[int(temp_48)][temp_49];
    // 0x0000B0: 0xEF95008FFF072206 Ldc
    temp_51 = temp_28 + -16;
    temp_52 = uint(temp_51) >> 2;
    temp_53 = temp_52 >> 2;
    temp_54 = int(temp_52) & 3;
    temp_55 = vp_c8.data[int(temp_53)][temp_54];
    temp_56 = int(temp_52) + 1;
    temp_57 = uint(temp_56) >> 2;
    temp_58 = temp_56 & 3;
    temp_59 = vp_c8.data[int(temp_57)][temp_58];
    // 0x0000B8: 0xEF95008000072200 Ldc
    temp_60 = uint(temp_28) >> 2;
    temp_61 = temp_60 >> 2;
    temp_62 = int(temp_60) & 3;
    temp_63 = vp_c8.data[int(temp_61)][temp_62];
    temp_64 = int(temp_60) + 1;
    temp_65 = uint(temp_64) >> 2;
    temp_66 = temp_64 & 3;
    temp_67 = vp_c8.data[int(temp_65)][temp_66];
    // 0x0000C8: 0xEF95008000870814 Ldc
    temp_68 = temp_14 + 8;
    temp_69 = uint(temp_68) >> 2;
    temp_70 = temp_69 >> 2;
    temp_71 = int(temp_69) & 3;
    temp_72 = vp_c8.data[int(temp_70)][temp_71];
    temp_73 = int(temp_69) + 1;
    temp_74 = uint(temp_73) >> 2;
    temp_75 = temp_73 & 3;
    temp_76 = vp_c8.data[int(temp_74)][temp_75];
    // 0x0000D0: 0xEF95008000070C1C Ldc
    temp_77 = uint(temp_41) >> 2;
    temp_78 = temp_77 >> 2;
    temp_79 = int(temp_77) & 3;
    temp_80 = vp_c8.data[int(temp_78)][temp_79];
    temp_81 = int(temp_77) + 1;
    temp_82 = uint(temp_81) >> 2;
    temp_83 = temp_81 & 3;
    temp_84 = vp_c8.data[int(temp_82)][temp_83];
    // 0x0000D8: 0xEF95008002070C1A Ldc
    temp_85 = temp_41 + 32;
    temp_86 = uint(temp_85) >> 2;
    temp_87 = temp_86 >> 2;
    temp_88 = int(temp_86) & 3;
    temp_89 = vp_c8.data[int(temp_87)][temp_88];
    temp_90 = int(temp_86) + 1;
    temp_91 = uint(temp_90) >> 2;
    temp_92 = temp_90 & 3;
    temp_93 = vp_c8.data[int(temp_91)][temp_92];
    // 0x0000E8: 0xEF95008001070C18 Ldc
    temp_94 = temp_41 + 16;
    temp_95 = uint(temp_94) >> 2;
    temp_96 = temp_95 >> 2;
    temp_97 = int(temp_95) & 3;
    temp_98 = vp_c8.data[int(temp_96)][temp_97];
    temp_99 = int(temp_95) + 1;
    temp_100 = uint(temp_99) >> 2;
    temp_101 = temp_99 & 3;
    temp_102 = vp_c8.data[int(temp_100)][temp_101];
    // 0x0000F0: 0xEF95008001870812 Ldc
    temp_103 = temp_14 + 24;
    temp_104 = uint(temp_103) >> 2;
    temp_105 = temp_104 >> 2;
    temp_106 = int(temp_104) & 3;
    temp_107 = vp_c8.data[int(temp_105)][temp_106];
    temp_108 = int(temp_104) + 1;
    temp_109 = uint(temp_108) >> 2;
    temp_110 = temp_108 & 3;
    temp_111 = vp_c8.data[int(temp_109)][temp_110];
    // 0x0000F8: 0xEF95008001072216 Ldc
    temp_112 = temp_28 + 16;
    temp_113 = uint(temp_112) >> 2;
    temp_114 = temp_113 >> 2;
    temp_115 = int(temp_113) & 3;
    temp_116 = vp_c8.data[int(temp_114)][temp_115];
    temp_117 = int(temp_113) + 1;
    temp_118 = uint(temp_117) >> 2;
    temp_119 = temp_117 & 3;
    temp_120 = vp_c8.data[int(temp_118)][temp_119];
    // 0x000108: 0xEF95008FFF87220A Ldc
    temp_121 = temp_28 + -8;
    temp_122 = uint(temp_121) >> 2;
    temp_123 = temp_122 >> 2;
    temp_124 = int(temp_122) & 3;
    temp_125 = vp_c8.data[int(temp_123)][temp_124];
    temp_126 = int(temp_122) + 1;
    temp_127 = uint(temp_126) >> 2;
    temp_128 = temp_126 & 3;
    temp_129 = vp_c8.data[int(temp_127)][temp_128];
    // 0x000110: 0xEF95008000872202 Ldc
    temp_130 = temp_28 + 8;
    temp_131 = uint(temp_130) >> 2;
    temp_132 = temp_131 >> 2;
    temp_133 = int(temp_131) & 3;
    temp_134 = vp_c8.data[int(temp_132)][temp_133];
    temp_135 = int(temp_131) + 1;
    temp_136 = uint(temp_135) >> 2;
    temp_137 = temp_135 & 3;
    temp_138 = vp_c8.data[int(temp_136)][temp_137];
    // 0x000118: 0xEF95008000870C10 Ldc
    temp_139 = temp_41 + 8;
    temp_140 = uint(temp_139) >> 2;
    temp_141 = temp_140 >> 2;
    temp_142 = int(temp_140) & 3;
    temp_143 = vp_c8.data[int(temp_141)][temp_142];
    temp_144 = int(temp_140) + 1;
    temp_145 = uint(temp_144) >> 2;
    temp_146 = temp_144 & 3;
    temp_147 = vp_c8.data[int(temp_145)][temp_146];
    // 0x000128: 0xEF95008002870C0E Ldc
    temp_148 = temp_41 + 40;
    temp_149 = uint(temp_148) >> 2;
    temp_150 = temp_149 >> 2;
    temp_151 = int(temp_149) & 3;
    temp_152 = vp_c8.data[int(temp_150)][temp_151];
    temp_153 = int(temp_149) + 1;
    temp_154 = uint(temp_153) >> 2;
    temp_155 = temp_153 & 3;
    temp_156 = vp_c8.data[int(temp_154)][temp_155];
    // 0x000130: 0xEF95008002870808 Ldc
    temp_157 = temp_14 + 40;
    temp_158 = uint(temp_157) >> 2;
    temp_159 = temp_158 >> 2;
    temp_160 = int(temp_158) & 3;
    temp_161 = vp_c8.data[int(temp_159)][temp_160];
    temp_162 = int(temp_158) + 1;
    temp_163 = uint(temp_162) >> 2;
    temp_164 = temp_162 & 3;
    temp_165 = vp_c8.data[int(temp_163)][temp_164];
    // 0x000138: 0xEF95008001872222 Ldc
    temp_166 = temp_28 + 24;
    temp_167 = uint(temp_166) >> 2;
    temp_168 = temp_167 >> 2;
    temp_169 = int(temp_167) & 3;
    temp_170 = vp_c8.data[int(temp_168)][temp_169];
    temp_171 = int(temp_167) + 1;
    temp_172 = uint(temp_171) >> 2;
    temp_173 = temp_171 & 3;
    temp_174 = vp_c8.data[int(temp_172)][temp_173];
    // 0x000148: 0xEF95008001870C0C Ldc
    temp_175 = temp_41 + 24;
    temp_176 = uint(temp_175) >> 2;
    temp_177 = temp_176 >> 2;
    temp_178 = int(temp_176) & 3;
    temp_179 = vp_c8.data[int(temp_177)][temp_178];
    temp_180 = int(temp_176) + 1;
    temp_181 = uint(temp_180) >> 2;
    temp_182 = temp_180 & 3;
    temp_183 = vp_c8.data[int(temp_181)][temp_182];
    // 0x000150: 0x5C68100002770426 Fmul
    temp_184 = temp_20 * temp_3;
    // 0x000158: 0xEFD87F800C47FF04 Ald
    temp_185 = in_attr4.y;
    // 0x000168: 0x5C68100002771E1E Fmul
    temp_186 = temp_33 * temp_3;
    // 0x000170: 0x59A0130002470526 Ffma
    temp_187 = fma(temp_24, temp_4, temp_184);
    // 0x000178: 0x4CB0119002371A05 F2i
    temp_188 = trunc(vp_c4.data[8].w);
    temp_189 = int(temp_188);
    // 0x000188: 0x5C68100002772020 Fmul
    temp_190 = temp_46 * temp_3;
    // 0x000190: 0x5C68100002770606 Fmul
    temp_191 = temp_55 * temp_3;
    // 0x000198: 0x5C68100002770000 Fmul
    temp_192 = temp_63 * temp_3;
    // 0x0001A8: 0x59A00F0002471F1E Ffma
    temp_193 = fma(temp_37, temp_4, temp_186);
    // 0x0001B0: 0x5C68100002771C1C Fmul
    temp_194 = temp_80 * temp_3;
    // 0x0001B8: 0x59A0130002571426 Ffma
    temp_195 = fma(temp_72, temp_5, temp_187);
    // 0x0001C8: 0xEFD87F800C07FF14 Ald
    temp_196 = in_attr4.x;
    // 0x0001D0: 0x5C68100002771A1A Fmul
    temp_197 = temp_89 * temp_3;
    // 0x0001D8: 0x5C68100002771818 Fmul
    temp_198 = temp_98 * temp_3;
    // 0x0001E8: 0x59A0100002472120 Ffma
    temp_199 = fma(temp_50, temp_4, temp_190);
    // 0x0001F0: 0x59A0030002470707 Ffma
    temp_200 = fma(temp_59, temp_4, temp_191);
    // 0x0001F8: 0x59A0000002470100 Ffma
    temp_201 = fma(temp_67, temp_4, temp_192);
    // 0x000208: 0x59A00E0002471D1F Ffma
    temp_202 = fma(temp_84, temp_4, temp_194);
    // 0x000210: 0x59A00D0002471B1B Ffma
    temp_203 = fma(temp_93, temp_4, temp_197);
    // 0x000218: 0x59A00C000247191A Ffma
    temp_204 = fma(temp_102, temp_4, temp_198);
    // 0x000228: 0x59A00F000257081E Ffma
    temp_205 = fma(temp_161, temp_5, temp_193);
    // 0x000230: 0xEFD87F800C87FF08 Ald
    temp_206 = in_attr4.z;
    // 0x000238: 0x5C68100002771616 Fmul
    temp_207 = temp_116 * temp_3;
    // 0x000248: 0x3848000000470518 Shl
    temp_208 = temp_189 << 4;
    // 0x000250: 0x59A0100002571212 Ffma
    temp_209 = fma(temp_107, temp_5, temp_199);
    // 0x000258: 0xEF94007068871805 Ldc
    temp_210 = temp_208 + 0x688;
    temp_211 = uint(temp_210) >> 2;
    temp_212 = temp_211 >> 2;
    temp_213 = int(temp_211) & 3;
    temp_214 = vp_c7.data[int(temp_212)][temp_213];
    // 0x000268: 0x59A0038002570A0A Ffma
    temp_215 = fma(temp_125, temp_5, temp_200);
    // 0x000270: 0xEF95007068071806 Ldc
    temp_216 = temp_208 + 0x680;
    temp_217 = uint(temp_216) >> 2;
    temp_218 = temp_217 >> 2;
    temp_219 = int(temp_217) & 3;
    temp_220 = vp_c7.data[int(temp_218)][temp_219];
    temp_221 = int(temp_217) + 1;
    temp_222 = uint(temp_221) >> 2;
    temp_223 = temp_221 & 3;
    temp_224 = vp_c7.data[int(temp_222)][temp_223];
    // 0x000278: 0x59A0000002570202 Ffma
    temp_225 = fma(temp_134, temp_5, temp_201);
    // 0x000288: 0xEF95007048071800 Ldc
    temp_226 = temp_208 + 0x480;
    temp_227 = uint(temp_226) >> 2;
    temp_228 = temp_227 >> 2;
    temp_229 = int(temp_227) & 3;
    temp_230 = vp_c7.data[int(temp_228)][temp_229];
    temp_231 = int(temp_227) + 1;
    temp_232 = uint(temp_231) >> 2;
    temp_233 = temp_231 & 3;
    temp_234 = vp_c7.data[int(temp_232)][temp_233];
    // 0x000290: 0x59A00F8002571010 Ffma
    temp_235 = fma(temp_143, temp_5, temp_202);
    // 0x000298: 0x5C58100002671515 Fadd
    temp_236 = temp_76 + temp_195;
    // 0x0002A8: 0x59A00B0002471717 Ffma
    temp_237 = fma(temp_120, temp_4, temp_207);
    // 0x0002B0: 0xEF94007048871816 Ldc
    temp_238 = temp_208 + 0x488;
    temp_239 = uint(temp_238) >> 2;
    temp_240 = temp_239 >> 2;
    temp_241 = int(temp_239) & 3;
    temp_242 = vp_c7.data[int(temp_240)][temp_241];
    // 0x0002B8: 0x59A00D8002570E0E Ffma
    temp_243 = fma(temp_152, temp_5, temp_203);
    // 0x0002C8: 0x5C58100001E70909 Fadd
    temp_244 = temp_165 + temp_205;
    // 0x0002D0: 0x5C58100001271312 Fadd
    temp_245 = temp_111 + temp_209;
    // 0x0002D8: 0x59A00D0002570C0C Ffma
    temp_246 = fma(temp_179, temp_5, temp_204);
    // 0x0002E8: 0x5C58100001071111 Fadd
    temp_247 = temp_147 + temp_235;
    // 0x0002F0: 0x5C68100000471513 Fmul
    temp_248 = temp_236 * temp_185;
    // 0x0002F8: 0x59A00B8002572222 Ffma
    temp_249 = fma(temp_170, temp_5, temp_237);
    // 0x000308: 0x5C58100000E70F0E Fadd
    temp_250 = temp_156 + temp_243;
    // 0x000310: 0x5C68100000470909 Fmul
    temp_251 = temp_244 * temp_185;
    // 0x000318: 0x5C58100000C70D0D Fadd
    temp_252 = temp_183 + temp_246;
    // 0x000328: 0x5C58100000A70B0A Fadd
    temp_253 = temp_129 + temp_215;
    // 0x000330: 0x5C68100000471212 Fmul
    temp_254 = temp_245 * temp_185;
    // 0x000338: 0x59A0098001471111 Ffma
    temp_255 = fma(temp_247, temp_196, temp_248);
    // 0x000348: 0x5C58100002272322 Fadd
    temp_256 = temp_174 + temp_249;
    // 0x000350: 0x59A0048001470E09 Ffma
    temp_257 = fma(temp_250, temp_196, temp_251);
    // 0x000358: 0x5C58100000270302 Fadd
    temp_258 = temp_138 + temp_225;
    // 0x000368: 0x59A0090001470D0D Ffma
    temp_259 = fma(temp_252, temp_196, temp_254);
    // 0x000370: 0x59A0088000870A11 Ffma
    temp_260 = fma(temp_253, temp_206, temp_255);
    // 0x000378: 0x0103F8000007F00A Mov32i
    // 0x000388: 0x59A0048000872203 Ffma
    temp_261 = fma(temp_256, temp_206, temp_257);
    // 0x000390: 0x59A0068000870202 Ffma
    temp_262 = fma(temp_258, temp_206, temp_259);
    // 0x000398: 0x59A0030000071111 Ffma
    temp_263 = fma(temp_260, temp_230, temp_220);
    // 0x0003A8: 0x5080000000470000 Mufu
    temp_264 = 1.0 / temp_230;
    // 0x0003B0: 0x4C58101002A70A09 Fadd
    temp_265 = 1.0 + vp_c4.data[10].z;
    // 0x0003B8: 0x59A0028001670303 Ffma
    temp_266 = fma(temp_261, temp_242, temp_214);
    // 0x0003C8: 0x5080000000470909 Mufu
    temp_267 = 1.0 / temp_265;
    // 0x0003D0: 0x4C58101002B70A0A Fadd
    temp_268 = 1.0 + vp_c4.data[10].w;
    // 0x0003D8: 0x59A0038000170202 Ffma
    temp_269 = fma(temp_262, temp_234, temp_224);
    // 0x0003E8: 0x5080000000470101 Mufu
    temp_270 = 1.0 / temp_234;
    // 0x0003F0: 0x4C68100C00071105 Fmul
    temp_271 = temp_263 * vp_c3.data[0].x;
    // 0x0003F8: 0x5080000000470A0A Mufu
    temp_272 = 1.0 / temp_268;
    // 0x000408: 0x4C68100C00471108 Fmul
    temp_273 = temp_263 * vp_c3.data[1].x;
    // 0x000410: 0x5C5910000117060B Fadd
    temp_274 = 0.0 - temp_220;
    temp_275 = temp_274 + temp_263;
    // 0x000418: 0x4C58101002070304 Fadd
    temp_276 = temp_266 + vp_c4.data[8].x;
    // 0x000428: 0x4C68100C00871111 Fmul
    temp_277 = temp_263 * vp_c3.data[2].x;
    // 0x000430: 0x5C59100000270707 Fadd
    temp_278 = 0.0 - temp_224;
    temp_279 = temp_278 + temp_269;
    // 0x000438: 0x49A0028C00170205 Ffma
    temp_280 = fma(temp_269, vp_c3.data[0].y, temp_271);
    // 0x000448: 0x49A0040C00570206 Ffma
    temp_281 = fma(temp_269, vp_c3.data[1].y, temp_273);
    // 0x000450: 0x51A2001002870B00 Ffma
    temp_282 = 0.0 - vp_c4.data[10].x;
    temp_283 = fma(temp_275, temp_264, temp_282);
    // 0x000458: 0x4C98079400370008 Mov
    // 0x000468: 0x49A0088C00970211 Ffma
    temp_284 = fma(temp_269, vp_c3.data[2].y, temp_277);
    // 0x000470: 0x49A0028C00270405 Ffma
    temp_285 = fma(temp_276, vp_c3.data[0].z, temp_280);
    // 0x000478: 0x51A2009002970701 Ffma
    temp_286 = 0.0 - vp_c4.data[10].y;
    temp_287 = fma(temp_279, temp_270, temp_286);
    // 0x000488: 0x49A0030C00670406 Ffma
    temp_288 = fma(temp_276, vp_c3.data[1].z, temp_281);
    // 0x000490: 0x5C68100000970009 Fmul
    temp_289 = temp_283 * temp_267;
    // 0x000498: 0x49A0088C00A70303 Ffma
    temp_290 = fma(temp_266, vp_c3.data[2].z, temp_284);
    // 0x0004A8: 0x49A0088C00A70404 Ffma
    temp_291 = fma(temp_276, vp_c3.data[2].z, temp_284);
    // 0x0004B0: 0x4C58100C00370505 Fadd
    temp_292 = temp_285 + vp_c3.data[0].w;
    // 0x0004B8: 0x5C68100000A7010A Fmul
    temp_293 = temp_287 * temp_272;
    // 0x0004C8: 0x4C98079400270001 Mov
    // 0x0004D0: 0x4C58100C00770606 Fadd
    temp_294 = temp_288 + vp_c3.data[1].w;
    // 0x0004D8: 0x4C58100C00B70307 Fadd
    temp_295 = temp_290 + vp_c3.data[2].w;
    // 0x0004E8: 0x4C58100C00B70404 Fadd
    temp_296 = temp_291 + vp_c3.data[2].w;
    // 0x0004F0: 0xEFF07F800887FF07 Ast
    out_attr0.z = temp_295;
    // 0x0004F8: 0x4C68100C02870500 Fmul
    temp_297 = temp_292 * vp_c3.data[10].x;
    // 0x000508: 0x51A1009400470A02 Ffma
    temp_298 = 0.0 - vp_c5.data[0].z;
    temp_299 = fma(temp_293, temp_298, vp_c5.data[1].x);
    // 0x000510: 0x4C68100C02470503 Fmul
    temp_300 = temp_292 * vp_c3.data[9].x;
    // 0x000518: 0x51A1041400570A0A Ffma
    temp_301 = 0.0 - vp_c5.data[0].w;
    temp_302 = fma(temp_293, temp_301, vp_c5.data[1].y);
    // 0x000528: 0x49A0000C02970601 Ffma
    temp_303 = fma(temp_294, vp_c3.data[10].y, temp_297);
    // 0x000530: 0x4C68100C01C70500 Fmul
    temp_304 = temp_292 * vp_c3.data[7].x;
    // 0x000538: 0x4C68100C02070505 Fmul
    temp_305 = temp_292 * vp_c3.data[8].x;
    // 0x000548: 0x49A0011400070908 Ffma
    temp_306 = fma(temp_289, vp_c5.data[0].x, temp_299);
    // 0x000550: 0x49A0018C02570603 Ffma
    temp_307 = fma(temp_294, vp_c3.data[9].y, temp_300);
    // 0x000558: 0xEFF07F800907FF08 Ast
    out_attr1.x = temp_306;
    // 0x000568: 0x49A0000C01D70602 Ffma
    temp_308 = fma(temp_294, vp_c3.data[7].y, temp_304);
    // 0x000570: 0x49A0028C02170605 Ffma
    temp_309 = fma(temp_294, vp_c3.data[8].y, temp_305);
    // 0x000578: 0x49A0008C02A70401 Ffma
    temp_310 = fma(temp_296, vp_c3.data[10].z, temp_303);
    // 0x000588: 0x49A005140017090A Ffma
    temp_311 = fma(temp_289, vp_c5.data[0].y, temp_302);
    // 0x000590: 0x49A0018C02670403 Ffma
    temp_312 = fma(temp_296, vp_c3.data[9].z, temp_307);
    // 0x000598: 0xEFF07F800947FF0A Ast
    out_attr1.y = temp_311;
    // 0x0005A8: 0x49A0010C01E70402 Ffma
    temp_313 = fma(temp_296, vp_c3.data[7].z, temp_308);
    // 0x0005B0: 0x49A0028C02270405 Ffma
    temp_314 = fma(temp_296, vp_c3.data[8].z, temp_309);
    // 0x0005B8: 0x4C58100C02B70101 Fadd
    temp_315 = temp_310 + vp_c3.data[10].w;
    // 0x0005C8: 0x4C58100C02770303 Fadd
    temp_316 = temp_312 + vp_c3.data[9].w;
    // 0x0005D0: 0xEFF07F8007C7FF01 Ast
    gl_Position.w = temp_315;
    // 0x0005D8: 0x4C58100C01F70202 Fadd
    temp_317 = temp_313 + vp_c3.data[7].w;
    // 0x0005E8: 0xEFF07F800787FF03 Ast
    gl_Position.z = temp_316;
    // 0x0005F0: 0x4C58100C02370505 Fadd
    temp_318 = temp_314 + vp_c3.data[8].w;
    // 0x0005F8: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_317;
    // 0x000608: 0xEFF07F800747FF05 Ast
    gl_Position.y = temp_318;
    // 0x000610: 0xE30000000007000F Exit
    return;
}
